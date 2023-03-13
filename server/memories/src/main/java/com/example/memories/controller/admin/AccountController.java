package com.example.memories.controller.admin;

import com.example.memories.model.Accounts;
import com.example.memories.service.interfaces.AccountService;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value ="/pages")
public class AccountController {
    @Autowired
    private AccountService  accountService;

    @GetMapping( "/AccountTable")
    public ModelMap mmAccountTable(Model model) {
        List<Accounts> listAccounts=  accountService.getAllAccounts();
        model.addAttribute("listAccounts", listAccounts);
        return new ModelMap();
    }

    @PutMapping("/accounts/{id}/remove")
    public String softDeleteAccount(@PathVariable Long id){
        //Delete specific account based on id (Implement only in Admin Service)
        accountService.softDeleteAccount(id);
        return"redirect:/pages/dashboard";
    }

    @PutMapping("/accounts/{id}/recover")
    public String recoverAccount(@PathVariable Long id){
        //Delete specific account based on id (Implement only in Admin Service)
        accountService.recoverAccount(id);
        return"redirect:/pages/dashboard";
    }
}
