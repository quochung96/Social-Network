package com.example.memories.model;

import com.example.memories.entity.PostsEntity;
import com.example.memories.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comments {
    private Long cmtId;
    private String cmtContent;
    private UsersEntity users;
    private Long replyTo;
    private PostsEntity post;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
    private int isArchieved;
}

