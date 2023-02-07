package com.example.memories.service.interfaces;

import com.example.memories.model.Notifications;

import java.util.List;

public interface NotificationService {
    public List<Notifications> getAllNotification();
    Notifications createNotification(Long userId, Long postId, Notifications notification);
    Notifications updateNotification(Long id, Notifications notification);
    Notifications getNotiById(Long id);
    Boolean deleteNotiById(Long id);

}
