package com.example.memories.service.interfaces;

import com.example.memories.exeption.MessageNotFoundException;
import com.example.memories.model.Messages;

import java.util.List;

public interface MessageService {
    List<Messages> getAllMessage();
    Messages createMessage(long userId);
    Messages updateMessage(long messageId) throws MessageNotFoundException;
    Boolean deleteMessage(long messageId) throws MessageNotFoundException;
}
