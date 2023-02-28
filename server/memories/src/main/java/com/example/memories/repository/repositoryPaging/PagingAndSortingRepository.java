package com.example.memories.repository.repositoryPaging;

import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;

import java.awt.print.Pageable;

public interface PagingAndSortingRepository<T,ID> extends CrudRepository<T,ID> {
    Page<T> findAll(Pageable pageable);
}
