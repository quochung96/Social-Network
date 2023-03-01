package com.example.memories.service.interfaces;

import com.example.memories.model.Comments;

import java.util.List;

public interface CommentService {
    Comments createComment(long userId,Comments comments);
    List<Comments> getAllCommentsPost(long postId);
    Comments getCommentById(Long id);
    Comments updateComment(Long id, Comments comments);
    boolean deleteComment(Long id);
}

