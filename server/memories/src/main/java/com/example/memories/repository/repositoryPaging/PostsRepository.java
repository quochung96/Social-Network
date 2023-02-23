package com.example.memories.repository.repositoryPaging;
import com.example.memories.entity.PostsEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface PostsRepository extends JpaRepository<PostsEntity, Long> {
    List<PostsEntity> findAll();
}
