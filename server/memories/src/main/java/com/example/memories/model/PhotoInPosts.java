package com.example.memories.model;

import com.example.memories.entity.PostsEntity;
import com.example.memories.entity.UsersEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PhotoInPosts {
    private Long photoId;
    private Integer isHighLight;
    private String photoUrl;
    private PostsEntity posts;
    private UsersEntity users;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
}
