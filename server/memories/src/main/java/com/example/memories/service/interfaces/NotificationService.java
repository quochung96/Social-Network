package com.example.memories.service.interfaces;

import com.example.memories.model.Notifications;

import java.util.List;

public interface NotificationService {
    public List<Notifications> getAllNotification();
    Notifications createNotification(long userId, long postId, Notifications notification);
    Notifications updateNotification(long id, Notifications notification);
    Notifications getNotificationById(long id);
    Boolean deleteNotificationById(long id);

}
