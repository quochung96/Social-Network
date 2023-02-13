package com.example.memories.service.interfaces;

import com.example.memories.model.Reactions;

import java.util.List;

public interface ReactionService {
    Reactions createReaction(Reactions reactions);
    List<Reactions> getAllReactions();
    Reactions getReactionById(Long id);
    Reactions updateReaction(Long id, Reactions reactions);
    Boolean deleteReaction(Long id);
}
