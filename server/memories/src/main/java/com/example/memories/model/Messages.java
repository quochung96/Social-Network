package com.example.memories.model;

import com.example.memories.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Messages {
    private Long id;
    private String message;
    private UsersEntity sender;
    private LocalDateTime createAt;
    private MessageType type;

    public enum MessageType{
        CHAT,
        JOIN,
        LEAVE
    }
}
