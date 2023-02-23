package com.example.memories.service.implement;

import com.example.memories.entity.ReactionTagEntity;
import com.example.memories.model.ReactionTags;
import com.example.memories.model.Reactions;
import com.example.memories.repository.repositoryJPA.ReactionTagRepository;
import com.example.memories.service.interfaces.ReactionService;
import com.example.memories.service.interfaces.ReactionTagService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class ReactionTagServiceImpl implements ReactionTagService {
    @Autowired
    private ReactionTagRepository reactionTagRepository;
    @Override
    public ReactionTags createReactionTag(ReactionTags reactionTags) {
        ReactionTagEntity reactionTagEntity = new ReactionTagEntity();
        reactionTagEntity.setDescription(reactionTags.getDescription());
        return reactionTags;
    }

    @Override
    public List<ReactionTags> getAllReactionTags() {
        List<ReactionTagEntity> reactionTagEntities = reactionTagRepository.findAll();
        List<ReactionTags> reactionTags = reactionTagEntities.stream().map(
                reacttag -> new ReactionTags(
                        reacttag.getReactTagId(),
                        reacttag.getDescription()
                )
        ).collect(Collectors.toList());
        return reactionTags;
    }

    @Override
    public ReactionTags getReactionTagById(Long id) {
        ReactionTagEntity reactionTagEntity = reactionTagRepository.findById(id).get();
        ReactionTags reactionTags = new ReactionTags();
        BeanUtils.copyProperties(reactionTagEntity,reactionTags);
        return reactionTags;
    }

    @Override
    public ReactionTags updateReaction(Long id, ReactionTags reactionTags) {
        ReactionTagEntity reactionTagEntity = reactionTagRepository.findById(id).get();
        reactionTagEntity.setReactTagId(reactionTags.getReactTagId());
        reactionTagEntity.setDescription(reactionTags.getDescription());
        return reactionTags;
    }

    @Override
    public Boolean deleteReactionTag(Long id) {
        reactionTagRepository.deleteById(id);
        return true;
    }
}
