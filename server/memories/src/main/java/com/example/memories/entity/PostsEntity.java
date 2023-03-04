package com.example.memories.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "POSTS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PostsEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_ID", nullable = false, unique = true)
    @TableGenerator(
            name = "POST_GEN",
            table = "SEQUENCER",
            pkColumnName = "SEQ_NAME",
            valueColumnName = "SEQ_COUNT",
            pkColumnValue = "POST_SEQ_NEXT_VAL",
            allocationSize = 1
    )
    private Long postId;

    @Column(name="POST_CONTENT")
    private String content;

    @Column(name="PERMISSION")
    private long permission;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private UsersEntity user;

    @ManyToOne
    @JoinColumn(name = "PHOTO_ID")
    private PhotoInPostEntity photoInPost;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    @PastOrPresent(message = "Create Date must be past or present")
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    @PastOrPresent(message = "Update Date must be past or present")
    private Date updateAt;

    @Column(name = "IS_ARCHIEVED")
    private int isArchieved;
}
