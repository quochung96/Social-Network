package com.example.memories.controller;
import com.example.memories.model.PhotoInPosts;
import com.example.memories.service.interfaces.PhotoInPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PhotoInPostController {
    @Autowired
    PhotoInPostService photoInPostService;
    @GetMapping("/photoinposts")
    public ResponseEntity getAllPhoto(){
        return ResponseEntity.ok().body(photoInPostService.getAllPhoto());
    }
    @GetMapping("/photoinposts/{id}")
    public ResponseEntity getPhotobyid(@PathVariable Long id, @RequestBody PhotoInPosts photoInPosts){
        return ResponseEntity.ok().body(photoInPostService.getPhotoById(id));
    }
    @PutMapping("/photoinposts/{id}")
    public ResponseEntity updatePhoto(@PathVariable Long id, @RequestBody PhotoInPosts photoInPosts){
        return ResponseEntity.ok().body(photoInPostService.updatePhoto(id, photoInPosts));
    }
    @PostMapping("/{postId}/photoinposts")
    public ResponseEntity createPhotoinposts(@PathVariable Long postId, @RequestBody PhotoInPosts photoInPosts){
        return ResponseEntity.ok().body(photoInPostService.createPhotoInPost(postId, photoInPosts));
    }
    @DeleteMapping("/photoinposts/{id}")
    public ResponseEntity deletePhoto(@PathVariable Long id){
        return ResponseEntity.ok().body(photoInPostService.deletePhotoInPost(id));
    }
}
