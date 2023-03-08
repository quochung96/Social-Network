package com.example.memories.repository.repositoryJPA;

import com.example.memories.builder.AccountBuilder;
import com.example.memories.entity.AccountsEntity;

import com.example.memories.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface AccountsRepository extends JpaRepository<AccountsEntity,Long> {
    Optional<AccountsEntity> findByEmail(String email);

    List<AccountsEntity> findTop10ByOrderByCreateAtDesc();
}