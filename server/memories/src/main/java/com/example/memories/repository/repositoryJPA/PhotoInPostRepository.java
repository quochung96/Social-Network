package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.entity.PostsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoInPostRepository extends JpaRepository<PhotoInPostEntity, Long> {
}
