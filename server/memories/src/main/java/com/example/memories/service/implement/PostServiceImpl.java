package com.example.memories.service.implement;

import com.example.memories.entity.PostsEntity;
import com.example.memories.entity.UsersEntity;
import com.example.memories.model.Posts;
import com.example.memories.model.Users;
import com.example.memories.repository.PostsRepository;
import com.example.memories.repository.UsersRepository;
import com.example.memories.service.interfaces.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    @Autowired
    PostsRepository postsRepository;
    @Autowired
    UsersRepository userRepository;
    @Override
    public List<Posts> getAllPosts() {
        List<PostsEntity> postsEntities = postsRepository.findAll();

        List<Posts> posts = postsEntities.stream().map(
                post -> new Posts(
                        post.getPostId(),
                        post.getContent(),
                        post.getPermission(),
                        post.getUser(),
                        post.getPhotoInPost(),
                        post.getCreateAt(),
                        post.getUpdateAt(),
                        post.getIsArchieved()
                )
        ).collect(Collectors.toList());
        return posts;
    }

    @Override
    public Posts createPost(long userID, Posts post) {
        PostsEntity newPost = new PostsEntity();
        post.setCreateAt(new Date());
        post.setUpdateAt(new Date());
        post.setUser(userRepository.findById(userID).get());
        BeanUtils.copyProperties(post, newPost);
        postsRepository.save(newPost);
        return post;
    }

    @Override
    public Posts updatePost(long id, Posts post) {
        PostsEntity newPost = postsRepository.findById(id).get();
        newPost.setContent(post.getContent());
        newPost.setPermission(post.getPermission());
        newPost.setUpdateAt(new Date());
        postsRepository.save(newPost);

        Posts updatePostResponse = new Posts();
        BeanUtils.copyProperties(newPost, updatePostResponse);
        return updatePostResponse;
    }

    @Override
    public Posts getPostById(long id) {
        PostsEntity postsEntity = postsRepository.findById(id).get();
        Posts post = new Posts();
        BeanUtils.copyProperties(postsEntity, post);
        return post;
    }

    @Override
    public Boolean deletePostById(long id) {
        postsRepository.deleteById(id);
        return true;
    }
}
