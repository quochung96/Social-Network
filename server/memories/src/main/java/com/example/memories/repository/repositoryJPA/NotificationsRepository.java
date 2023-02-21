package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.NotificationsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationsRepository extends JpaRepository<NotificationsEntity, Long> {
}
