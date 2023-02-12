package com.example.memories.model;

import com.example.memories.entity.PostsEntity;
import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PhotoInPosts {
    private Long photoId;
    private Integer isHighLight;
    private String photoUrl;
    private Date createAt;
    private Date updateAt;
}
