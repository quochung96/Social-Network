package com.example.memories.service.interfaces;

import com.example.memories.model.SearchRecents;

import java.util.List;

public interface SearchRecentService {
    public List<SearchRecents> getAllSearch();
    SearchRecents createSearch(Long userId, SearchRecents searchRecents);
    SearchRecents updateSearch(Long id, SearchRecents searchRecents);
    SearchRecents getSearchById(Long id);
    Boolean deleteSearchRecents(Long id);
}
