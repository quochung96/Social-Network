package com.example.memories.helper;

import com.example.memories.repository.repositoryPaging.PagingAndSortingCustomRepository;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.List;

@Getter
public class PagingAndSortingHelper {
    private final ModelAndViewContainer model;
    private final String listName;
    private final String sortField;
    private final String sortDir;
    private final String keyword;
    public PagingAndSortingHelper(ModelAndViewContainer model, String listName, String sortField, String sortDir, String keyword) {
        this.model = model;
        this.listName = listName;
        this.sortField = sortField;
        this.sortDir = sortDir;
        this.keyword = keyword;
    }
    public void updateAttributes(int pageNum, @NotNull Page<?> page){
        List<?> listItems = page.getContent();
        int pageSize = page.getSize();

        long startPage = (long) (pageNum - 1) * pageSize + 1;
        long endPage = startPage + pageSize + 1;
        if(endPage > page.getTotalElements()) {
            endPage = page.getTotalElements();
        }
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);
        model.addAttribute("currentPage", pageNum);
        model.addAttribute("totalItems", page.getTotalElements());
        model.addAttribute("totalPages", page.getTotalPages());
        model.addAttribute(listName, listItems);
    }
    public void listEntities(int pageNumber, int pageSize, PagingAndSortingCustomRepository<?, Long> repository) {
        Pageable pageable = createPageable(pageSize, pageNumber);
        Page<?> page;

        if (keyword != null) {
            page = repository.findAll(keyword, pageable);
        } else {
            page = repository.findAll(pageable);
        }

        updateAttributes(pageNumber, page);
    }

    public Pageable createPageable(int pageSize, int pageNumber) {
        Sort sort = Sort.by(sortField);
        sort = "asc".equals(sortDir) ? sort.ascending() : sort.descending();
        return PageRequest.of(pageNumber - 1, pageSize, sort);
    }
}
