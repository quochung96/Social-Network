package com.example.memories.entity;

public class CommentsEntity {
}
=======
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "COMMENTS")
public class CommentsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CMT_ID", nullable = false)
    private Long cmtId;

    @Column(name = "CMT_CONTENT", nullable = true)
    private String cmtContent;
    @ManyToOne
    @JoinColumn(name = "USERS_ID")
    private UsersEntity usersId;

    @Column(name = "REPLY_TO", nullable = true)
    private Long replyTo;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity postId;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT",nullable = true)
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    private Date updateAt;

    @Column(name = "IS_ARCHIEVED", nullable = true)
    private int isArchieved;

}
