package com.example.memories.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "pages")
public class DashboardController {

    @GetMapping( "/dashboard")
    public ModelMap mmDashboard() {
        return new ModelMap();
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