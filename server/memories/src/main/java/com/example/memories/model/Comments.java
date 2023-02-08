package com.example.memories.model;

import com.example.memories.entity.PostsEntity;
import com.example.memories.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comments {
    private Long cmtId;

    private String cmtContent;

    private UsersEntity usersId;
    private Long replyTo;
    private PostsEntity postId;
    private Date createAt;
    private Date updateAt;
    private int isArchieved;
}

