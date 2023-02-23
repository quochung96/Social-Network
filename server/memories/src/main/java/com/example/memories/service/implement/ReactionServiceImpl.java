package com.example.memories.service.implement;

import com.example.memories.entity.ReactionsEntity;
import com.example.memories.model.Reactions;
import com.example.memories.repository.repositoryJPA.ReactionRepository;
import com.example.memories.service.interfaces.ReactionService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class ReactionServiceImpl implements ReactionService {
    @Autowired
    private ReactionRepository reactionRepository;
    public ReactionServiceImpl(ReactionRepository reactionRepository){
        this.reactionRepository = reactionRepository;
    }
    @Override
    public Reactions createReaction(Reactions reactions) {
        ReactionsEntity reactionsEntity = new ReactionsEntity();
        reactionsEntity.setCreateAt(new Date());
        reactionsEntity.setUpdateAt(new Date());
        BeanUtils.copyProperties(reactions,reactionsEntity);
        reactionRepository.save(reactionsEntity);
        return reactions;
    }

    @Override
    public List<Reactions> getAllReactions() {
        List<ReactionsEntity> reactionsEntities = reactionRepository.findAll();
        List<Reactions> reactions = reactionsEntities.stream().map(
                react -> new Reactions(
                        react.getReactId(),
                        react.getCreateAt(),
                        react.getUpdateAt(),
                        react.getPostId(),
                        react.getUserId(),
                        react.getCmtId(),
                        react.getTagId()
                )
        ).collect(Collectors.toList());
        return reactions;
    }

    @Override
    public Reactions getReactionById(Long id) {
        ReactionsEntity reactionsEntity = reactionRepository.findById(id).get();
        Reactions reactions = new Reactions();
        BeanUtils.copyProperties(reactionsEntity,reactions);
        return reactions;
    }

    @Override
    public Reactions updateReaction(Long id, Reactions reactions) {
        ReactionsEntity reactionsEntity = reactionRepository.findById(id).get();
        reactionsEntity.setUpdateAt(new Date());
        reactionsEntity.setTagId(reactions.getTagId().getTagId());
        reactionRepository.save(reactionsEntity);
        return reactions;
    }

    @Override
    public Boolean deleteReaction(Long id) {
        reactionRepository.deleteById(id);
        return true;
    }
}
