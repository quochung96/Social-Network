package com.example.memories.controller.admin;

import com.example.memories.model.Posts;
import com.example.memories.service.interfaces.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping(value ="/pages")
public class PostTableController {
    @Autowired
    private PostService postService;

    @GetMapping( "/PostTable")
    public ModelMap mmPostTable(Model model) {
        //List<Posts> listPosts =  postService.getAllPosts();
        //model.addAttribute("listPosts", listPosts);
        return new ModelMap();
    }
}
