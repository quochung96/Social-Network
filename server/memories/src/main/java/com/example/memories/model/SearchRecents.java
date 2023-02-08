package com.example.memories.model;

import com.example.memories.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchRecents {
    private Long searchId;
    private Long searchType;
    private String keyword;
    private Long pageId;
    private Date createAt;
    private Date updateAt;
    private UsersEntity user;
}
