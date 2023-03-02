package com.example.memories.controller;

import com.example.memories.model.Comments;
import com.example.memories.service.interfaces.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class CommentsController {
    @Autowired
    CommentService commentService;
    @GetMapping("/post/{postId}/comments")
    public ResponseEntity getAllCommentsPost(@PathVariable Long postId){
        return ResponseEntity.ok().body(commentService.getAllCommentsPost(postId));
    }
    @GetMapping("/comments/{id}")
    public ResponseEntity getCommentById(@PathVariable Long id){
        return ResponseEntity.ok().body(commentService.getCommentById(id));
    }
    @PostMapping("/user/{userId}/comments")
    public ResponseEntity createComment(@PathVariable Long userId, @RequestBody Comments comments){
        return ResponseEntity.ok().body(commentService.createComment(userId,comments));
    }
    @DeleteMapping("/comments/{id}")
    public ResponseEntity deleteComment(@PathVariable Long id){
        return ResponseEntity.ok().body(commentService.deleteComment(id));
    }
    @PutMapping("/comments/{id}")
    public ResponseEntity  updateComment(@PathVariable Long id,@RequestBody Comments comments){
        return ResponseEntity.ok().body(commentService.updateComment(id,comments));
    }
}

