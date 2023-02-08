package com.example.memories.service.interfaces;

import com.example.memories.model.Comments;

import java.util.List;

public interface CommentService {
    Comments createComment(Comments comments);
    List<Comments> getAllComments();
    Comments getCommentById(Long id);
    Comments updateComment(Long id, Comments comments);
    boolean deleteComment(Long id);
}

