package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.ReactionTagEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReactionTagRepository extends JpaRepository<ReactionTagEntity,Long>{
}
