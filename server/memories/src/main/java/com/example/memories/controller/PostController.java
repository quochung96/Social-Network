package com.example.memories.controller;
import com.example.memories.entity.PostsEntity;
import com.example.memories.exeption.InvalidRequestException;
import com.example.memories.exeption.PostNotFoundException;
import com.example.memories.model.Posts;
import com.example.memories.service.interfaces.PostService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostService postService;
    @GetMapping("/posts")
    public ResponseEntity<List<Posts>> getAllPost(BindingResult result){
        if (result.hasErrors())
        {
            throw new InvalidRequestException("Invalid Request Exception", result);
        }
        @Valid List<Posts> postsList = postService.getAllPosts();
        return ResponseEntity.ok().body(postsList);
    }

    @GetMapping("/{userId}/posts")
    public ResponseEntity<List<Posts>> getPostByUserId(@PathVariable Long userId, BindingResult result) throws PostNotFoundException {
        if (result.hasErrors()){
            throw new InvalidRequestException("Invalid Request Exception", result);
        }
        @Valid List<Posts> postsList = postService.getPostByUserId(userId);
        return ResponseEntity.ok().body(postsList);
    }
    @GetMapping("/posts/{id}")
    public ResponseEntity getPostById(@PathVariable @Min(value = 1, message = "Id must be greater than or equal to 1") Long id, BindingResult result) throws PostNotFoundException {
        if (result.hasErrors()){
            return ResponseEntity.badRequest().body("Validation error: " + result.getAllErrors());
        }
        return ResponseEntity.ok().body(postService.getPostById(id));
    }
    @PostMapping("/{userId}/posts")
    public ResponseEntity createPost(@PathVariable Long userId, @Valid @RequestBody Posts post, BindingResult result){
        if (result.hasErrors()){
            return ResponseEntity.badRequest().body("Validation error: " + result.getAllErrors());
        }
        return ResponseEntity.ok().body(postService.createPost(userId, post));
    }
    @PutMapping("/posts/{id}")
    public ResponseEntity updatePost(@PathVariable Long id, @Valid @RequestBody Posts post, BindingResult result) throws PostNotFoundException {
        if (result.hasErrors()){
            return ResponseEntity.badRequest().body("Validation error: " + result.getAllErrors());
        }
        return ResponseEntity.ok().body(postService.updatePost(id, post));
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity deletePost(@PathVariable @Min(value = 1, message = "Id must be greater than or equal to 1") Long id, BindingResult result) throws PostNotFoundException {
        if (result.hasErrors()){
            return ResponseEntity.badRequest().body("Validation error: " + result.getAllErrors());
        }
        return ResponseEntity.ok().body(postService.deletePostById(id));
    }

}
