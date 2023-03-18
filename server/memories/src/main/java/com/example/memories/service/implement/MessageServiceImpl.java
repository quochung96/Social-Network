package com.example.memories.service.implement;

import com.example.memories.exeption.MessageNotFoundException;
import com.example.memories.model.Messages;
import com.example.memories.service.interfaces.MessageService;

import java.util.List;

public class MessageServiceImpl implements MessageService {
    @Override
    public List<Messages> getAllMessage() {
        return null;
    }

    @Override
    public Messages createMessage(long userId) {
        return null;
    }

    @Override
    public Messages updateMessage(long messageId) throws MessageNotFoundException {
        return null;
    }

    @Override
    public Boolean deleteMessage(long messageId) throws MessageNotFoundException {
        return null;
    }
}
