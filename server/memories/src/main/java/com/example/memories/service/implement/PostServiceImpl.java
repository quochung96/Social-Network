package com.example.memories.service.implement;

import com.example.memories.builder.PostResponse;
import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.entity.PostsEntity;
import com.example.memories.exeption.PostNotFoundException;
import com.example.memories.model.Posts;
import com.example.memories.repository.repositoryJPA.PhotoInPostRepository;
import com.example.memories.repository.repositoryJPA.PostsRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.PostService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

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
    public PostResponse getAllPosts(int pageNo,int pageSize,String sortBy, String sortDir, String keyword){
            Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
            Pageable pageable = PageRequest.of(pageNo-1, pageSize, sort);
            Page<PostsEntity> posts = postsRepository.findAll(pageable);

            List<PostsEntity> listOfPosts = posts.getContent();

            List<Posts> content = listOfPosts.stream().
                    map(post ->
                    new Posts(
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
            if(keyword != null) {
                content = content.stream()
                        .filter(subContent -> (subContent.getContent().contains(keyword) || subContent.getUser().getUserName().contains(keyword)))
                        .collect(Collectors.toList());
            }
            PostResponse postResponse = new PostResponse();
            postResponse.setContent(content);
            postResponse.setPageNo(posts.getNumber());
            postResponse.setPageSize(posts.getSize());
            postResponse.setTotalElements(posts.getTotalElements());
            postResponse.setTotalPages(posts.getTotalPages());
            postResponse.setLast(posts.isLast());

            return postResponse;
    }


    @Override
    public List<Posts> getPostByUserId(long userId) throws PostNotFoundException {
        try {
            List<PostsEntity> postsEntity = postsRepository.findAll();

            return postsEntity.stream().
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
        }
        catch (NoSuchElementException e){
            throw new PostNotFoundException(String.format("Could not found any post with userId %s", userId));
        }
    }

    @Override
    public Posts createPost(long userID, Posts post) throws Exception {
        try {
            PostsEntity newPost = new PostsEntity();
            assert post!=null;
            //When create a post have an image save to the database
            if (post.getPhotoInPost() != null || post.getPhotoInPost().getPhotoUrl().isEmpty()) {
                PhotoInPostEntity photoInPostEntity = new PhotoInPostEntity(post.getPhotoInPost().getPhotoUrl(),userRepository.findById(userID).get());
                photoInPostRepository.save(photoInPostEntity);
                post.setPhotoInPost(photoInPostEntity);
            }
            post.setCreateAt(LocalDateTime.now());
            post.setUpdateAt(LocalDateTime.now());
            if (userRepository.findById(userID).isPresent()) {
                post.setUser(userRepository.findById(userID).get());
            }
            BeanUtils.copyProperties(post, newPost);
            postsRepository.save(newPost);
            return post;
        }
        catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Posts updatePost(long id, Posts post) throws PostNotFoundException{
        if(postsRepository.findById(id).isPresent()) {
            PostsEntity newPost = postsRepository.findById(id).get();
            newPost.setContent(post.getContent());
            newPost.setUpdateAt(LocalDateTime.now());
            if(post.getPhotoInPost() != null && post.getPhotoInPost().getPhotoUrl() != null){
                PhotoInPostEntity photoInPostEntity = new PhotoInPostEntity(post.getPhotoInPost().getPhotoUrl(),userRepository.findById(post.getUser().getUser_id()).isPresent() ? userRepository.findById(post.getUser().getUser_id()).get() : null);
                photoInPostRepository.save(photoInPostEntity);
                newPost.setPhotoInPost(photoInPostEntity);
            }
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
    public Posts updateAudiencePost(long id, Posts post) throws PostNotFoundException {
        if(postsRepository.findById(id).isPresent()){
                PostsEntity newPost = postsRepository.findById(id).get();
                newPost.setPermission(post.getPermission());
                postsRepository.save(newPost);
                Posts updatePostResponse = new Posts();
                BeanUtils.copyProperties(newPost, updatePostResponse);
                return updatePostResponse;
        }
        else {
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
        if(postsRepository.findById(postId).isEmpty()) {
            throw new PostNotFoundException(String.format(String.format("Could not found any post with Id %s", postId)));
        }
        postsRepository.deleteById(postId);
        return true;
    }
}
