package com.example.memories.repository.repositoryPaging;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

@NoRepositoryBean
public interface PagingAndSortingCustomRepository<T, ID> extends PagingAndSortingRepository<T,ID> {
    Page<T> findAll(String keyword, Pageable pageable);
}
