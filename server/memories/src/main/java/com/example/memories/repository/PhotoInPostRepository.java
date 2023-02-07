package com.example.memories.repository;
import com.example.memories.entity.PhotoInPostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoInPostRepository extends JpaRepository<PhotoInPostEntity, Long> {
}
