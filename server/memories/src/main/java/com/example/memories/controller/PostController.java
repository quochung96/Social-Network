package com.example.memories.controller;
import com.example.memories.builder.PostResponse;
import com.example.memories.constant.SpringBootApplicationConstant;
import com.example.memories.entity.PostsEntity;
import com.example.memories.exeption.PostNotFoundException;
import com.example.memories.model.Posts;
import com.example.memories.service.interfaces.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService postService;
    @GetMapping("/posts")
    public ResponseEntity getAllPosts(
            @RequestParam(value = "keyword",defaultValue = SpringBootApplicationConstant.DEFAULT_PAGE_KEYWORD,required = false) String keyword,
            @RequestParam(value = "pageNo", defaultValue = SpringBootApplicationConstant.DEFAULT_PAGE_NUMBER, required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = SpringBootApplicationConstant.DEFAULT_PAGE_SIZE, required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = SpringBootApplicationConstant.DEFAULT_SORT_BY, required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = SpringBootApplicationConstant.DEFAULT_SORT_DIRECTION, required = false) String sortDir
    ) {
        return ResponseEntity.ok().body(postService.getAllPosts(pageNo, pageSize,sortBy, sortDir,keyword));
    }

    @GetMapping("/{userId}/posts")
    public ResponseEntity getPostByUserId(@PathVariable Long userId) throws PostNotFoundException {
        return ResponseEntity.ok().body(postService.getPostByUserId(userId));
    }
    @GetMapping("/posts/{id}")
    public ResponseEntity getPostById(@PathVariable Long id) throws PostNotFoundException {
        return ResponseEntity.ok().body(postService.getPostById(id));
    }
    @PostMapping("/{userId}/posts")
    public ResponseEntity createPost(@PathVariable Long userId, @RequestBody Posts post) throws Exception{
        return ResponseEntity.ok().body(postService.createPost(userId, post));
    }
    @PutMapping("/posts/{id}")
    public ResponseEntity updatePost(@PathVariable Long id, @RequestBody Posts post) throws PostNotFoundException {
        return ResponseEntity.ok().body(postService.updatePost(id, post));
    }
    @PutMapping("/posts/{id}/audience")
    public ResponseEntity updateAudiencePost(@PathVariable Long id, @RequestBody Posts post) throws PostNotFoundException{
        return ResponseEntity.ok().body(postService.updateAudiencePost(id,post));
    }
    @DeleteMapping("/posts/{id}")
    public ResponseEntity deletePost(@PathVariable Long id) throws PostNotFoundException {
        return ResponseEntity.ok().body(postService.deletePostById(id));
    }

}
