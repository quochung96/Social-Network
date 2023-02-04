package com.example.memories.service.interfaces;

import com.example.memories.model.Posts;

import java.util.List;

public interface PostService {
    public List<Posts> getAllPosts();

    Posts createPost(Posts post);

    Posts updatePost(long id, Posts post);

    Posts getPostById(long id);

    Boolean deletePostById(long id);
}
