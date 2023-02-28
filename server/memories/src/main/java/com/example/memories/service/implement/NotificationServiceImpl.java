package com.example.memories.service.implement;

import com.example.memories.entity.NotificationsEntity;
import com.example.memories.model.Notifications;
import com.example.memories.repository.repositoryJPA.NotificationsRepository;
import com.example.memories.repository.repositoryJPA.PostsRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.NotificationService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Service
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private final UsersRepository usersRepository;
    @Autowired
    private final NotificationsRepository notificationsRepository;
    @Autowired
    private final PostsRepository postsRepository;
    @Override
    public List<Notifications> getAllNotification() {
        List<NotificationsEntity> notificationsEntities = notificationsRepository.findAll();
        List<Notifications> notifications = notificationsEntities.stream().map(
                notification -> new Notifications(
                        notification.getNotiId(),
                        notification.getIsSeen(),
                        notification.getCreateAt(),
                        notification.getUpdateAt(),
                        notification.getNotiType(),
                        notification.getIsPopular(),
                        notification.getUser(),
                        notification.getPost()
                )
        ).collect(Collectors.toList());
        return notifications;
    }

    @Override
    public Notifications createNotification(Long userId, Long postId, Notifications notification) {
        NotificationsEntity newNotification = new NotificationsEntity();
        notification.setCreateAt(new Date());
        notification.setUpdateAt(new Date());
        notification.setUser(usersRepository.findById(userId).get());
        notification.setPost(postsRepository.findById(postId).get());
        BeanUtils.copyProperties(notification, newNotification);
        notificationsRepository.save(newNotification);
        return notification;
    }

    @Override
    public Notifications updateNotification(Long id, Notifications notification) {
        NotificationsEntity newNotification = notificationsRepository.findById(id).get();
        newNotification.setUpdateAt(new Date());
        newNotification.setNotiId(notification.getNotiType());
        notificationsRepository.save(newNotification);

        Notifications updateNotification = new Notifications();
        BeanUtils.copyProperties(newNotification, updateNotification);
        return updateNotification;
    }

    @Override
    public Notifications getNotiById(Long id) {
        NotificationsEntity notificationsEntity = notificationsRepository.findById(id).get();
        Notifications notification = new Notifications();
        BeanUtils.copyProperties(notificationsEntity, notification);
        return notification;
    }

    @Override
    public Boolean deleteNotiById(Long id) {
        notificationsRepository.deleteById(id);
        return true;
    }
}
