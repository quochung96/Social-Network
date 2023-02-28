package com.example.memories.repository.repositoryPaging;

import org.springframework.data.domain.Pageable;
import java.util.function.Function;

public interface Page<T> extends Slice<T> {
    public <T> Page<T> empty();
    public <T> Page<T> empty(Pageable pageable);
    long getTotalElements();
    int getTotalPages();
    <U> Page<U> map(Function<? super T,? extends U> converter);
}