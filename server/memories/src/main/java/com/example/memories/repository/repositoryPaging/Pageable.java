package com.example.memories.repository.repositoryPaging;

import org.springframework.data.domain.Sort;

public interface Pageable {
    int getPageNumber();
    int getPageSize();
    long getOffset();
    Sort getSort();
    Pageable next();
    Pageable previousOrFirst();
    Pageable first();
    boolean hasPrevious();
}
