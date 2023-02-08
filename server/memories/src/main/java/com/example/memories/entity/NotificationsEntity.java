package com.example.memories.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

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

    @Column(name = "IS_SEEN", nullable = true)
    private Integer isSeen;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT", nullable = true )
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT", nullable = true)
    private Date updateAt;

    @Column(name = "NOTI_TYPE", nullable = true)
    private Long notiType;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity user;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity post;

    @Column(name = "IS_POPULAR", nullable = true)
    private Integer isPopular;
}
