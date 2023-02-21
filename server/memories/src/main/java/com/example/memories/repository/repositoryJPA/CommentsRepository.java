package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.CommentsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository extends JpaRepository<CommentsEntity,Long> {
}

