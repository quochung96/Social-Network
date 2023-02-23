package com.example.memories.service.implement;

import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.entity.PostsEntity;
import com.example.memories.exeption.PostNotFoundException;
import com.example.memories.helper.PagingAndSortingHelper;
import com.example.memories.model.Posts;
import com.example.memories.repository.repositoryJPA.PhotoInPostRepository;
import com.example.memories.repository.repositoryPaging.PostsRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.PostService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import static com.example.memories.constant.SpringBootApplicationConstant.POSTS_PER_PAGE;

@Service
@Transactional(rollbackOn = Exception.class)
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
                        post.getIsArchieved(),
                        post.getPhotoInPost()
                )
        ).collect(Collectors.toList());

        return posts;
    }

//    @Override
//    public void getPostsByPage(int pageNumber, PagingAndSortingHelper helper) {
//        helper.listEntities(pageNumber, POSTS_PER_PAGE, postsRepository);
//    }

    @Override
    public List<Posts> getPostByUserId(long userId) throws PostNotFoundException {
        try {
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
                                    post.getIsArchieved(),
                                    post.getPhotoInPost()
                            )
                    ).collect(Collectors.toList());
            return posts;
        }
        catch (NoSuchElementException e){
            throw new PostNotFoundException(String.format("Could not found any post with userId %s", userId));
        }
    }

    @Override
    public Posts createPost(long userID, Posts post) {
        PostsEntity newPost = new PostsEntity();
        //When create a post have an image save to the database
        PhotoInPostEntity photoInPostEntity = new PhotoInPostEntity(post.getPhotoInPost().getPhotoUrl());
        photoInPostRepository.save(photoInPostEntity);
        post.setPhotoInPost(photoInPostEntity);

        post.setCreateAt(new Date());
        post.setUpdateAt(new Date());
        if(userRepository.findById(userID).isPresent()) {
            post.setUser(userRepository.findById(userID).get());
        }
        BeanUtils.copyProperties(post, newPost);
        postsRepository.save(newPost);
        return post;
    }

    @Override
    public Posts updatePost(long id, Posts post) throws PostNotFoundException{
        if(postsRepository.findById(id).isPresent()) {
            PostsEntity newPost = postsRepository.findById(id).get();
            newPost.setContent(post.getContent());

//        newPost.setPermission(post.getPermission());
            newPost.setUpdateAt(new Date());
            postsRepository.save(newPost);

            Posts updatePostResponse = new Posts();
            BeanUtils.copyProperties(newPost, updatePostResponse);
            return updatePostResponse;
        }
        else{
            throw new PostNotFoundException(String.format("Could not found any post with Id %s", id));
        }
    }

    @Override
    public Posts getPostById(long id) throws PostNotFoundException{
        try {
            PostsEntity postsEntity = postsRepository.findById(id).get();
            Posts post = new Posts();
            BeanUtils.copyProperties(postsEntity, post);
            return post;
        }
        catch (NoSuchElementException e){
            throw new PostNotFoundException(String.format("Could not found any post with Id %s", id));
        }
    }

    @Override
    public Boolean deletePostById(long postId) throws PostNotFoundException{
        if(postsRepository.findById(postId).isPresent()) {
            throw new PostNotFoundException(String.format(String.format("Could not found any post with Id %s", postId)));
        }
        postsRepository.deleteById(postId);
        return true;
    }
}
