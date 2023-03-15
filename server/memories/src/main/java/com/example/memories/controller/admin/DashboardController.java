package com.example.memories.controller.admin;

import com.example.memories.model.Accounts;
import com.example.memories.service.interfaces.AccountService;
import com.example.memories.service.interfaces.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Random;

@Controller
@RequestMapping(value = "pages")
public class DashboardController {

    @Autowired
    PostService postService;
    @Autowired
    AccountService accountService;

    private static final Random RANDOM = new Random(System.currentTimeMillis());

    @GetMapping( "/dashboard")
    public ModelMap mmDashboard(Model model) {

        Long countPost = postService.countPost();
        model.addAttribute("countPost", countPost);

        model.addAttribute("chartData", getChartData());


        List<Accounts> listAccounts= accountService.getRecentAccountRegister();
        model.addAttribute("listAccounts", listAccounts);
        return new ModelMap();
    }
    private List<List<Object>> getChartData() {
        return List.of(
                List.of("Mushrooms", RANDOM.nextInt(100)),
                List.of("Onions", RANDOM.nextInt(100)),
                List.of("Olives", RANDOM.nextInt(100)),
                List.of("Zucchini", RANDOM.nextInt(100)),
                List.of("Pepperoni", RANDOM.nextInt(100)),
                List.of("sadfhjkhask", RANDOM.nextInt(100)),
                List.of("Zucchasdfas", RANDOM.nextInt(100)),
                List.of("Zucchini", RANDOM.nextInt(100)),
                List.of("Zucchini", RANDOM.nextInt(100))
        );
    }

    @GetMapping( "/table-elements")
    public ModelMap mmTableElements() {
        return new ModelMap();
    }

    @GetMapping( "/form-elements")
    public ModelMap mmFormElements() {
        return new ModelMap();
    }

}