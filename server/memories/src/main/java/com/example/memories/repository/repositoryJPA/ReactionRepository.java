package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.ReactionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReactionRepository extends JpaRepository<ReactionsEntity,Long>{
}

