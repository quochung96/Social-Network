package com.example.memories.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class PostsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_ID", nullable = false)
    private Long postId;

    @Column(name="POST_CONTENT")
    private String content;

    @Column(name="PERMISSION")
    private long permission;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private UsersEntity user;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    private Date updateAt;

    @Column(name = "IS_ARCHIEVED")
    private int isArchieved;
}