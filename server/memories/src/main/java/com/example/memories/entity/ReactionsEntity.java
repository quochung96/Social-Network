package com.example.memories.entity;
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
@Table(name = "REACTIONS")
public class ReactionsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REACT_ID", nullable = false)
    private Long reactId;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    private Date updateAt;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity postId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity userId;

    @ManyToOne
    @JoinColumn(name = "CMT_ID")
    private CommentsEntity cmtId;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private ReactionTagEntity tagId;
}

