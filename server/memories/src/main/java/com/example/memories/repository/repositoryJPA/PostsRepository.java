package com.example.memories.repository.repositoryJPA;
import com.example.memories.entity.PostsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepository extends JpaRepository<PostsEntity, Long> {

    @Query("SELECT COUNT(1) FROM PostsEntity")
    Long countAllPosts();
}
