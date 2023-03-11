package com.example.memories.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaListeners {
    private final RedisTemplate<String, String> redisTemplate;

    public KafkaListeners(RedisTemplate<String,String> redisTemplate){
        this.redisTemplate = redisTemplate;
    }
    @KafkaListener(
            topics = "notifications",
            groupId = "notifications_groupId"
    )
    public void notificationsListener(String data){
        System.out.println("Listener Notification Receive: " + data);
    }
    @KafkaListener(
            topics = "messages",
            groupId = "messages_groupId"
    )
    public void messagesListener(String data){
        redisTemplate.convertAndSend("messages", data);
        System.out.println("Listener Message Receive: " + data);
    }
    @KafkaListener(
            topics = "comments",
            groupId = "comments_groupId"
    )
    public void commentsListener(String data){
        System.out.println("Listener Comments Receive: " + data);
    }
}
