package com.example.memories.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "COMMENTS")
public class CommentsEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CMT_ID", nullable = false, unique = true)
    @TableGenerator(name = "COMMENT_GEN",
                    table = "SEQUENCER",
                    pkColumnName = "SEQ_NAME",
                    valueColumnName = "SEQ_COUNT",
                    pkColumnValue = "COMMENT_SEQ_NEXT_VAL",
                    allocationSize = 1
    )
    private Long cmtId;

    @Column(name = "CMT_CONTENT", nullable = false, length = 255)
    private String cmtContent;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USERS_ID")
    private UsersEntity usersId;

    @Column(name = "REPLY_TO")
    private Long replyTo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "POST_ID")
    private PostsEntity postId;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT",nullable = true)
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    private Date updateAt;

    @Column(name = "IS_ARCHIEVED", nullable = false)
    @Size(min = 1, message = "Temp delete must contain at least 1 operation")
    private int isArchieved;

}
