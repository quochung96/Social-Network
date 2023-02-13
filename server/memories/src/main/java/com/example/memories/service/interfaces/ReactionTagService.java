package com.example.memories.service.interfaces;

import com.example.memories.model.ReactionTags;

import java.util.List;

public interface ReactionTagService {
    ReactionTags createReactionTag(ReactionTags reactionTags);
    List<ReactionTags> getAllReactionTags();
    ReactionTags getReactionTagById(Long id);
    ReactionTags updateReaction(Long id,ReactionTags reactionTags);
    Boolean deleteReactionTag(Long id);
}
