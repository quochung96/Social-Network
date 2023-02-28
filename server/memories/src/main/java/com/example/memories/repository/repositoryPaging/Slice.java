package com.example.memories.repository.repositoryPaging;

import org.springframework.data.domain.Sort;
import org.springframework.data.util.Streamable;

import java.util.List;

public interface Slice<T> extends Streamable<T> {
    int getNumber();
    int getSize();
    int getNumberOfElements();
    List<T> getContent();
    boolean hasContent();
    Sort getSort();
    boolean isFirst();
    boolean isLast();
    boolean hasNext();
    boolean hasPrevious();
}