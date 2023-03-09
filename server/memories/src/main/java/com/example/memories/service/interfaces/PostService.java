package com.example.memories.service.interfaces;

import com.example.memories.builder.PostResponse;
import com.example.memories.exeption.PostNotFoundException;
import com.example.memories.model.Posts;

import java.util.List;

public interface PostService {
    PostResponse getAllPosts(int pageNo, int pageSize, String sortBy, String sortDir, String keyword);
    List<Posts> getPostByUserId(long user_id) throws PostNotFoundException;
    Posts createPost(long userId, Posts post) throws Exception;
    Posts updatePost(long id, Posts post) throws PostNotFoundException;
    Posts updateAudiencePost(long id, Posts post) throws PostNotFoundException;
    Posts getPostById(long id) throws PostNotFoundException;
    Boolean deletePostById(long id) throws PostNotFoundException;
}
