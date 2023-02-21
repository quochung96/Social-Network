package com.example.memories.service.implement;

import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.entity.PostsEntity;
import com.example.memories.model.Posts;
import com.example.memories.repository.repositoryJPA.PhotoInPostRepository;
import com.example.memories.repository.repositoryJPA.PostsRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
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
    private PostsRepository postsRepository;
    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private PhotoInPostRepository photoInPostRepository;
    @Override
    public List<Posts> getAllPosts() {
        List<PostsEntity> postsEntities = postsRepository.findAll(); // List all post in database

        //List All the post mapping to Posts model
        List<Posts> posts = postsEntities.stream().map(
                post -> new Posts(
                        post.getPostId(),
                        post.getContent(),
                        post.getPermission(),
                        post.getUser(),
                        post.getCreateAt(),
                        post.getUpdateAt(),
                        post.getIsArchieved()
                )
        ).collect(Collectors.toList());

        return posts;
    }
    @Override
    public List<Posts> getPostByUserId(long userId){
        List<PostsEntity> postsEntity = postsRepository.findAll();

        List<Posts> posts = postsEntity.stream().
                filter(post -> post.getUser().getUser_id() == userId).
                map(
                post -> new Posts(
                        post.getPostId(),
                        post.getContent(),
                        post.getPermission(),
                        post.getUser(),
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
        //When create a post have an image save to the database
//        ??PhotoInPostEntity photoInPostEntity = new PhotoInPostEntity(post.getPhotoInPost().getPhotoUrl());
//        photoInPostRepository.save(photoInPostEntity);
//        post.setPhotoInPost(photoInPostEntity);

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
