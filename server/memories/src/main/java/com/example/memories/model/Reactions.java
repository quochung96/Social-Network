package com.example.memories.model;

import com.example.memories.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reactions {
    private Long reactId;
    private Date createAt;
    private Date updateAt;
    private PostsEntity postId;
    private UsersEntity userId;
    private CommentsEntity cmtId;
    private ReactionsEntity tagId;

    public Reactions(Long reactId, Date createAt, Date updateAt, PostsEntity postId, UsersEntity userId, CommentsEntity cmtId, ReactionTagEntity tagId) {
    }
}