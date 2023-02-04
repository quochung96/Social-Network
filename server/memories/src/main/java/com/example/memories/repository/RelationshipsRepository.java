package com.example.memories.repository;

import com.example.memories.entity.RelationshipsEntity;
import org.aspectj.asm.internal.Relationship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RelationshipsRepository extends JpaRepository<RelationshipsEntity, Long> {

}
