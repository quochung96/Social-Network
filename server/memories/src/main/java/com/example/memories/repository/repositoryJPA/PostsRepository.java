package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.PostsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface PostsRepository extends JpaRepository<PostsEntity, Long> {

}
