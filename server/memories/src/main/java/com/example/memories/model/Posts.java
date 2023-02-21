package com.example.memories.model;

import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.entity.UsersEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Posts {
    private Long postId;

    private String content;

    private long permission;

    private UsersEntity user;
    private Date createAt;

    private Date updateAt;

    private int isArchieved;
}
