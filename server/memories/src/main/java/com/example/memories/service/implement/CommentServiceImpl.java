package com.example.memories.service.implement;

import com.example.memories.entity.CommentsEntity;
import com.example.memories.model.Comments;
import com.example.memories.repository.repositoryJPA.CommentsRepository;
import com.example.memories.repository.repositoryJPA.PostsRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.CommentService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(rollbackOn = Exception.class)
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentsRepository commentsRepository;
    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private PostsRepository postsRepository;
    @Override
    public Comments createComment(long postId,long userId,Comments comments){
        CommentsEntity commentsEntity = new CommentsEntity();
        comments.setIsArchieved(0);
        comments.setUsers(usersRepository.findById(userId).get());
        comments.setPost(postsRepository.findById(postId).get());
        comments.setCreateAt(LocalDateTime.now());
        comments.setUpdateAt(LocalDateTime.now());
        BeanUtils.copyProperties(comments,commentsEntity);
        commentsRepository.save(commentsEntity);
        return comments;
    }

    @Override
    public List<Comments> getAllCommentsPost(long postId) {
        List<CommentsEntity> commentsEntities = commentsRepository.findAllByPost(postsRepository.findById(postId).get());

        List<Comments> comments = commentsEntities.stream().map(
                cmt -> new Comments(
                        cmt.getCmtId(),
                        cmt.getCmtContent(),
                        cmt.getUsers(),
                        cmt.getReplyTo(),
                        cmt.getPost(),
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
        commentsEntity.setUpdateAt(LocalDateTime.now());
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
