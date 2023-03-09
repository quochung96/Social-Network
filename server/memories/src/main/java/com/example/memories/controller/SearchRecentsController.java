package com.example.memories.controller;
import com.example.memories.exeption.SearchRecentNotFoundException;
import com.example.memories.model.SearchRecents;
import com.example.memories.service.interfaces.SearchRecentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class SearchRecentsController {
    @Autowired
    SearchRecentService searchRecentService;
    @GetMapping("/searchrecents")
    public ResponseEntity getAllSearchRecents(){
        return ResponseEntity.ok().body(searchRecentService.getAllSearch());
    }
    @GetMapping("/searchrecents/{id}")
    public ResponseEntity getSearchRecentById(@PathVariable Long id){
        return ResponseEntity.ok().body(searchRecentService.getSearchById(id));
    }
    @PostMapping("/{userId}/searchrecents")
    public ResponseEntity createSearch(@PathVariable Long userId, @RequestBody SearchRecents searchRecents) throws Exception {
        return ResponseEntity.ok().body(searchRecentService.createSearch(userId, searchRecents));
    }
    @PutMapping("/{userId}/searchrecents")
    public ResponseEntity updateSearch(@PathVariable Long userId, @RequestBody SearchRecents searchRecents) throws SearchRecentNotFoundException{
        return ResponseEntity.ok().body(searchRecentService.updateSearch(userId,searchRecents));
    }
    @DeleteMapping("/searchrecents/{id}")
    public ResponseEntity deleteSearch(@PathVariable Long id) throws SearchRecentNotFoundException {
        return ResponseEntity.ok().body(searchRecentService.deleteSearchRecents(id));
    }
}
