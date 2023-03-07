package com.example.memories.repository.repositoryJPA;

import com.example.memories.entity.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<MessageEntity, Long> {
    List<MessageEntity> findAllByOrderByCreateAtDesc();
}
