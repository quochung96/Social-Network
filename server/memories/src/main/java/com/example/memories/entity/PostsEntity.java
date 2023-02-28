package com.example.memories.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "POSTS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PostsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_ID", nullable = false)
    private Long postId;

    @Column(name="POST_CONTENT", nullable = false)
    private String content;

    @Column(name="PERMISSION")
    private String permission;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="USER_ID")
    private UsersEntity user;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "PHOTO_ID")
    private PhotoInPostEntity photoInPost;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    private Date updateAt;

    @Column(name = "IS_ARCHIEVED")
    private int isArchieved;
}
