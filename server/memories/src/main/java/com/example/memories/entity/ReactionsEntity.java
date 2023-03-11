package com.example.memories.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

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

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "CREATE_AT")
    private LocalDateTime createAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "UPDATE_AT")
    private LocalDateTime updateAt;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity post;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity userId;

    @ManyToOne
    @JoinColumn(name = "CMT_ID")
    private CommentsEntity cmtId;

}

