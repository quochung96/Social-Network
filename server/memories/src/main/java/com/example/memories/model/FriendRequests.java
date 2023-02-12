package com.example.memories.model;

import com.example.memories.entity.UsersEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FriendRequests {
    private Long reqId;

    private Long mutalCount;
    private UsersEntity sendUser;
    private UsersEntity receiveUser;
    private int isAccepted;
    private int isArchived;
    private Date createAt;
    private Date updateAt;
}
