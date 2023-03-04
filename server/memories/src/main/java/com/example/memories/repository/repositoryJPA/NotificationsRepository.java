package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.NotificationsEntity;
import com.example.memories.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NotificationsRepository extends JpaRepository<NotificationsEntity, Long> {
    Optional<List<NotificationsEntity>> findAllByUser(UsersEntity usersEntity);
}
