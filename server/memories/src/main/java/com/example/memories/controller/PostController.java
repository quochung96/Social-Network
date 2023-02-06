package com.example.memories.controller;
import com.example.memories.entity.PostsEntity;
import com.example.memories.model.Posts;
import com.example.memories.service.interfaces.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService postService;
    @GetMapping("/posts")
    public ResponseEntity getAllPosts(){
        return ResponseEntity.ok().body(postService.getAllPosts());
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity getPostById(@PathVariable Integer id){
        return ResponseEntity.ok().body(postService.getPostById(id));
    }
    @PostMapping("/{userId}/posts")
    public ResponseEntity createPost(@PathVariable Integer userId, @RequestBody Posts post){
        return ResponseEntity.ok().body(postService.createPost(userId, post));
    }
    @PutMapping("/posts/{id}")
    public ResponseEntity updatePost(@PathVariable Integer id, @RequestBody Posts post){
        return ResponseEntity.ok().body(postService.updatePost(id, post));
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity deletePost(@PathVariable Integer id){
        return ResponseEntity.ok().body(postService.deletePostById(id));
    }

}
