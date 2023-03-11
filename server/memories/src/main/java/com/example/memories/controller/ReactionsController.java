package com.example.memories.controller;
import com.example.memories.entity.ReactionsEntity;
import com.example.memories.model.Reactions;
import com.example.memories.service.interfaces.ReactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ReactionsController {
    @Autowired
    ReactionService reactionService;
    @GetMapping("/reactions")
    public ResponseEntity getAllReactions(){
        return ResponseEntity.ok().body(reactionService.getAllReactions());
    }
    @GetMapping("/reactions/{id}")
    public ResponseEntity getReactionById(@PathVariable Long id){
        return ResponseEntity.ok().body(reactionService.getReactionById(id));
    }
    @GetMapping("/post/{postId}/reactions")
    public ResponseEntity getReactionByPostId(@PathVariable Long postId){
        return ResponseEntity.ok().body(reactionService.getAllReactionsByPostId(postId));
    }
    @GetMapping("/comment/{commentId}/reactions")
    public ResponseEntity getReactionByCommentId(@PathVariable Long commentId){
        return ResponseEntity.ok().body(reactionService.getAllReactionsByCommentId(commentId));
    }
    @PostMapping("/{userId}/reactions")
    public ResponseEntity createReaction(@PathVariable Long userId, @RequestBody Reactions reactions){
        return ResponseEntity.ok().body(reactionService.createReaction(reactions));
    }
    @PutMapping("/reactions/{id}")
    public ResponseEntity updateReaction(@PathVariable Long id,@RequestBody Reactions reactions){
        return ResponseEntity.ok().body(reactionService.updateReaction(id,reactions));
    }
    @DeleteMapping("/reactions/{id}")
    public ResponseEntity deleteReaction(@PathVariable Long id){
        return ResponseEntity.ok().body(reactionService.deleteReaction(id));
    }
}
