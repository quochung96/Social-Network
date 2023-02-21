package com.example.memories.controller;
import com.example.memories.entity.ReactionsEntity;
import com.example.memories.model.ReactionTags;
import com.example.memories.service.interfaces.ReactionTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ReactionTagController {
    @Autowired
    ReactionTagService reactionTagService;
    @GetMapping("/reactiontags")
    public ResponseEntity getAllReactionTag(){
        return ResponseEntity.ok().body(reactionTagService.getAllReactionTags());
    }
    @GetMapping("/reactiontags/{id}")
    public ResponseEntity getReactionTagById(@PathVariable Long id){
        return ResponseEntity.ok().body(reactionTagService.getReactionTagById(id));
    }
    @PostMapping("/reactiontags")
    public ResponseEntity createReactionTag(@RequestBody ReactionTags reactionTags){
        return ResponseEntity.ok().body(reactionTagService.createReactionTag(reactionTags));
    }
    @PutMapping("/reactiontags/{id}")
    public ResponseEntity updateReactionTag(@PathVariable Long id,@RequestBody ReactionTags reactionTags){
        return ResponseEntity.ok().body(reactionTagService.updateReaction(id,reactionTags));
    }
    @DeleteMapping("/reactiontags/{id}")
    public ResponseEntity deteleReactionTag(@PathVariable Long id){
        return ResponseEntity.ok().body(reactionTagService.deleteReactionTag(id));
    }
}
