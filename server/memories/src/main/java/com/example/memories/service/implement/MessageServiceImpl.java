package com.example.memories.service.implement;

import com.example.memories.entity.MessageEntity;
import com.example.memories.model.Message;
import com.example.memories.repository.repositoryJPA.MessageRepository;
import com.example.memories.service.interfaces.MessageService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(rollbackOn = Exception.class)
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageService messageService;
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;
    @Override
    public List<Message> getAllMessage() {
        List<MessageEntity> messageEntities = messageRepository.findAllByOrderByCreateAtDesc();
        return messageEntities.stream().map(
                mess -> new Message(
                        mess.getId(),
                        mess.getContent(),
                        mess.getSender(),
                        mess.getCreateAt()
                )
        ).collect(Collectors.toList());
    }

    @Override
    public Message createMessage(long userId, Message message) throws Exception {
        try {
            MessageEntity newMessage = new MessageEntity();
            message.setCreateAt(LocalDateTime.now());
            messageRepository.save(newMessage);
            return message;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }

    }

    @Override
    public Message updateMessage(long id, Message message) throws Exception {
        try {
            MessageEntity messageEntity = (MessageEntity) messageRepository.findAllByOrderByCreateAtDesc();
            messageEntity.setContent(message.getContent());
            messageEntity.setSender(message.getSender());
            messageEntity.setCreateAt(LocalDateTime.now());
            return message;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }

    }

    @Override
    public boolean deleteMessage(long id) throws Exception {
        try {
            messageRepository.deleteById(id);
            return true;
        }
        catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
