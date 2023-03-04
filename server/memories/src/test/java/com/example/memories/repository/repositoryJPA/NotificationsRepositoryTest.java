package com.example.memories.repository.repositoryJPA;

import com.example.memories.entity.NotificationsEntity;
import com.example.memories.entity.PostsEntity;
import com.example.memories.entity.UsersEntity;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@DataJpaTest
class NotificationsRepositoryTest {
    @Mock
    private NotificationsRepository notificationsRepository;

    @AfterEach
    void tearDown(){
        notificationsRepository.deleteAll();
    }

    @Test
    @DisplayName("Test FindAllByUser")
    void testFindAllByUser() {
        UsersEntity usersEntity = new UsersEntity();
        usersEntity.setUser_id(1L);
        PostsEntity postsEntity = new PostsEntity();
        postsEntity.setPostId(2L);
        List<NotificationsEntity> notificationsEntities = new ArrayList<>();
        notificationsEntities.add(new NotificationsEntity(1L, 1, new Date(), new Date(), 2L, usersEntity, postsEntity, 1));
        notificationsEntities.add(new NotificationsEntity(2L, 1, new Date(), new Date(), 3L, usersEntity, postsEntity, 0));
        notificationsEntities.add(new NotificationsEntity(3L, 0, new Date(), new Date(), 2L, usersEntity, postsEntity, 0));
        Optional<List<NotificationsEntity>> userNotification = notificationsRepository.findAllByUser(usersEntity);
        assertNotNull(userNotification);
    }
}