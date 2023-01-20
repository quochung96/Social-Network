package com.example.memories.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users {
    private Long user_id;
    private String userName;
    private Date birth_day;
    private String address;
    private String relationship;
    private String gender;
    private Long follower;
    private String cover_url;
    private String avatar_url;
    private Date createAt;
    private Date updatedAt;
}