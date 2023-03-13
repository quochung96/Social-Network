package com.example.memories.controller;

import com.example.memories.model.Accounts;
import com.example.memories.service.interfaces.AccountService;
import com.example.memories.service.interfaces.PostService;
import com.example.memories.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping(value = "pages")
public class DashboardController {

    @Autowired
    PostService postService;
    @Autowired
    AccountService accountService;
    @GetMapping( "/dashboard")
    public ModelMap mmDashboard(Model model) {

        Long countPost = postService.countPost();
        model.addAttribute("countPost", countPost);

        List<Accounts> listAccounts= accountService.getRecentAccountRegister();
        model.addAttribute("listAccounts", listAccounts);
        return new ModelMap();
    }

    @GetMapping( "/table-elements")
    public ModelMap mmTableElements() {
        return new ModelMap();
    }

}