package com.example.memories.service.implement;

import com.example.memories.entity.SearchRecentsEntity;
import com.example.memories.model.SearchRecents;
import com.example.memories.repository.repositoryJPA.SearchRecentsRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.SearchRecentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SearchRecentServiceImpl implements SearchRecentService {
    @Autowired
    private final SearchRecentsRepository searchRecentsRepository;
    @Autowired
    private final UsersRepository usersRepository;
    @Override
    public List<SearchRecents> getAllSearch() {
        List<SearchRecentsEntity> searchRecentsEntities = searchRecentsRepository.findAll();
        List<SearchRecents> searchRecents = searchRecentsEntities.stream().map(
                searchRecent -> new SearchRecents(
                        searchRecent.getSearchId(),
                        searchRecent.getSearchType(),
                        searchRecent.getKeyword(),
                        searchRecent.getPageId(),
                        searchRecent.getCreateAt(),
                        searchRecent.getUpdateAt(),
                        searchRecent.getUser()
                )
        ).collect(Collectors.toList());
        return searchRecents;
    }

    @Override
    public SearchRecents createSearch(Long userId, SearchRecents searchRecents) {
        SearchRecentsEntity newSearchRecent = new SearchRecentsEntity();
        searchRecents.setCreateAt(new Date());
        searchRecents.setUpdateAt(new Date());
        searchRecents.setUser(usersRepository.findById(userId).get());
        BeanUtils.copyProperties(searchRecents, newSearchRecent);
        searchRecentsRepository.save(newSearchRecent);
        return searchRecents;
    }

    @Override
    public SearchRecents updateSearch(Long id, SearchRecents searchRecents) {
        SearchRecentsEntity newSearchRecents = searchRecentsRepository.findById(id).get();
        newSearchRecents.setUpdateAt(new Date());
        searchRecents.setSearchType(searchRecents.getSearchType());
        searchRecentsRepository.save(newSearchRecents);

        SearchRecents updateSearchRecent = new SearchRecents();
        BeanUtils.copyProperties(newSearchRecents, updateSearchRecent);
        return updateSearchRecent;
    }

    @Override
    public SearchRecents getSearchById(Long id) {
        SearchRecentsEntity searchRecentsEntity = searchRecentsRepository.findById(id).get();
        SearchRecents searchRecents = new SearchRecents();
        BeanUtils.copyProperties(searchRecentsEntity, searchRecents);
        return searchRecents;
    }

    @Override
    public Boolean deleteSearchRecents(Long id) {
        searchRecentsRepository.deleteById(id);
        return true;
    }
}
