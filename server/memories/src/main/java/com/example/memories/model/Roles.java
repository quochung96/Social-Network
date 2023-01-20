package com.example.memories.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Roles {
    private Long role_id;
    private String roleName;
    private Date createAt;
    private Date updatedAt;
}