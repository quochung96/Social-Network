package com.example.memories.service.interfaces;

import com.example.memories.model.Message;


import java.util.List;

public interface MessageService {
    List<Message> getAllMessage();

    Message createMessage(long userId, Message message) throws Exception;

    Message updateMessage(long id, Message message) throws Exception;

    boolean deleteMessage(long id) throws Exception;
}
