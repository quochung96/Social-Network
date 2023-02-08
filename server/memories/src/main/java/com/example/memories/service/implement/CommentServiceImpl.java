package com.example.memories.service.implement;

import com.example.memories.entity.CommentsEntity;
import com.example.memories.model.Comments;
import com.example.memories.repository.CommentsRepository;
import com.example.memories.service.interfaces.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    @Autowired
    CommentsRepository commentsRepository;
    public CommentServiceImpl(CommentsRepository commentsRepository){

        this.commentsRepository = commentsRepository;
    }
    @Override
    public Comments createComment(Comments comments){
        CommentsEntity commentsEntity = new CommentsEntity();
        commentsEntity.setCreateAt(new Date());
        commentsEntity.setUpdateAt(new Date());
        BeanUtils.copyProperties(comments,commentsEntity);
        commentsRepository.save(commentsEntity);
        return comments;
    }

    @Override
    public List<Comments> getAllComments() {
        List<CommentsEntity> commentsEntities = commentsRepository.findAll();

        List<Comments> comments = commentsEntities.stream().map(
                cmt -> new Comments(
                        cmt.getCmtId(),
                        cmt.getCmtContent(),
                        cmt.getUsersId(),
                        cmt.getReplyTo(),
                        cmt.getPostId(),
                        cmt.getCreateAt(),
                        cmt.getUpdateAt(),
                        cmt.getIsArchieved()
                )
        ).collect(Collectors.toList());
        return comments;
    }

    @Override
    public Comments getCommentById(Long id) {
        CommentsEntity commentsEntity = commentsRepository.findById(id).get();
        Comments comments = new Comments();
        BeanUtils.copyProperties(commentsEntity,comments);
        return comments;
    }

    @Override
    public Comments updateComment(Long id, Comments comments) {
        CommentsEntity commentsEntity = commentsRepository.findById(id).get();
        commentsEntity.setUpdateAt(new Date());
        commentsEntity.setCmtContent(comments.getCmtContent());
        commentsEntity.setReplyTo(comments.getReplyTo());
        commentsRepository.save(commentsEntity);
        return comments;
    }

    @Override
    public boolean deleteComment(Long id) {
        commentsRepository.deleteById(id);
        return true;
    }
}
