package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.PostsEntity;
import com.example.memories.entity.ReactionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReactionRepository extends JpaRepository<ReactionsEntity,Long>{
    Optional<ReactionsEntity> findAllByPost(PostsEntity posts);
}

