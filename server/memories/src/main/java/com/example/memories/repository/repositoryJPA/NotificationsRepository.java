package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.NotificationsEntity;
import com.example.memories.entity.PostsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NotificationsRepository extends JpaRepository<NotificationsEntity, Long> {
    Optional<NotificationsEntity> findAllByPost(PostsEntity post);
}
