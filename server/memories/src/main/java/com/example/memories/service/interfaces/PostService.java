package com.example.memories.service.interfaces;

import com.example.memories.exeption.PostNotFoundException;
import com.example.memories.model.Posts;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public interface PostService {
    List<Posts> getAllPosts();

    List<Posts> getPostByUserId(long user_id) throws PostNotFoundException;

    Posts createPost(long userId, Posts post) throws Exception;

    Posts updatePost(long id, Posts post) throws PostNotFoundException;

    Posts getPostById(long id) throws PostNotFoundException;

    Boolean deletePostById(long id) throws PostNotFoundException;
}
