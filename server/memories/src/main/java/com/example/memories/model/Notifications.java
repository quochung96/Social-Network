package com.example.memories.model;

import com.example.memories.entity.PostsEntity;
import com.example.memories.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notifications {
    private Long notificationId;
    private Integer isSeen;
    private Date createAt;
    private Date updateAt;
    private Long notiType;
    private Integer isPopular;
    private UsersEntity user;
    private PostsEntity post;
}
