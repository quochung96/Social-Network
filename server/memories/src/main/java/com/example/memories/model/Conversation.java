package com.example.memories.model;

import com.example.memories.entity.MessageEntity;
import com.example.memories.entity.UsersEntity;

import java.time.LocalDateTime;

public class Conversation {
    private Long conversationId;
    private UsersEntity receiveUser;
    private MessageEntity messages;
    private LocalDateTime createAt;
}
