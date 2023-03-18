package com.example.memories.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message {
    private Long id;
    private String content;
    private String sender;
    private LocalDateTime createAt;
    private MessageType type;

    public Message(Long id, String content, String sender, LocalDateTime createAt) {
    }

    public enum MessageType{
        CHAT,
        JOIN,
        LEAVE
    }
}
