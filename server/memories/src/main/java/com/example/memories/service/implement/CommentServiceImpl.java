package com.example.memories.service.implement;

import com.example.memories.entity.CommentsEntity;
import com.example.memories.exeption.CommentNotFoundException;
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
import java.util.NoSuchElementException;
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
        comments.setUsers(usersRepository.findById(userId).isPresent() ? usersRepository.findById(userId).get(): null);
        comments.setPost(postsRepository.findById(postId).isPresent() ? postsRepository.findById(postId).get() : null);
        comments.setCreateAt(LocalDateTime.now());
        comments.setUpdateAt(LocalDateTime.now());
        BeanUtils.copyProperties(comments,commentsEntity);
        commentsRepository.save(commentsEntity);
        return comments;
    }

    @Override
    public List<Comments> getAllCommentsPost(long postId) {
        List<CommentsEntity> commentsEntities = commentsRepository.findAllByPost(postsRepository.findById(postId).get());

        return commentsEntities.stream().map(
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
    }

    @Override
    public Comments getCommentById(Long id) {
        CommentsEntity commentsEntity = commentsRepository.findById(id).get();
        Comments comments = new Comments();
        BeanUtils.copyProperties(commentsEntity,comments);
        return comments;
    }

    @Override
    public Comments updateComment(Long id, Comments comments) throws CommentNotFoundException {
        try {
            CommentsEntity commentsEntity = commentsRepository.findById(id).get();
            commentsEntity.setUpdateAt(LocalDateTime.now());
            commentsEntity.setCmtContent(comments.getCmtContent());
            commentsEntity.setReplyTo(comments.getReplyTo());
            commentsRepository.save(commentsEntity);
            return comments;
        }catch (NoSuchElementException e){
            throw new CommentNotFoundException(String.format("Could not found any post with Id %s", id));
        }
    }

    @Override
    public boolean deleteComment(Long id) throws CommentNotFoundException {
        try {
            commentsRepository.deleteById(id);
            return true;
        }
        catch (NoSuchElementException e){
            throw new CommentNotFoundException(String.format("Could not found any post with Id %s", id));
        }
    }
}
