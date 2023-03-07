package com.example.memories.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "NOTIFICATIONS")
public class NotificationsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NOTI_ID", nullable = false)
    private Long notiId;

    @Column(name = "IS_SEEN", nullable = false)
    private Integer isSeen;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "CREATE_AT" )
    private LocalDateTime createAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "UPDATE_AT")
    private LocalDateTime updateAt;

    @Column(name = "NOTI_TYPE")
    private Long notiType;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity user;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity post;

    @Column(name = "IS_POPULAR")
    private Integer isPopular;
}
