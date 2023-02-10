package com.example.memories.repository;
import com.example.memories.entity.PhotoInPostEntity;
import com.example.memories.entity.PostsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostsRepository extends JpaRepository<PostsEntity, Long> {

}
