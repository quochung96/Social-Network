package com.example.memories.utils;

import com.example.memories.annotation.PagingAndSortingParam;
import com.example.memories.helper.PagingAndSortingHelper;
import jakarta.validation.constraints.NotNull;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import java.util.Objects;

public class PagingAndSortingArgumentResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterAnnotation(PagingAndSortingParam.class) != null;
    }
    @Override
    public Object resolveArgument(@NotNull MethodParameter parameter,
                                  ModelAndViewContainer mavContainer,
                                  @NotNull NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        PagingAndSortingParam annotation = parameter.getParameterAnnotation(PagingAndSortingParam.class);
        String sortDir = webRequest.getParameter("sortDir");
        String sortField = webRequest.getParameter("sortField");
        String keyword = webRequest.getParameter("keyword");
        String reverseSortDir = "asc".equals(sortDir) ? "desc" : "asc";

        Objects.requireNonNull(mavContainer).addAttribute("sortField", sortField);
        mavContainer.addAttribute("sortDir", sortDir);
        mavContainer.addAttribute("reverseSortDir", sortDir);
        mavContainer.addAttribute("keyword", keyword);
        mavContainer.addAttribute("moduleUrl", Objects.requireNonNull(annotation).moduleUrl());
        return new PagingAndSortingHelper(mavContainer, annotation.listName(), sortField,sortDir, keyword);
    }
}
