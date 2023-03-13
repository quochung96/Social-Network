package com.example.memories.controller.admin;

import com.example.memories.builder.AuthenticationResponse;
import com.example.memories.model.Accounts;
import com.example.memories.service.interfaces.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/pages")
public class LoginController {

    @Autowired
    AccountService accountService;

    @Autowired
    private AuthenticationManager authenticationManager;
    @GetMapping("/login")
    public String showLoginPage(Model model){
        model.addAttribute("account",new Accounts());
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication == null || authentication instanceof AnonymousAuthenticationToken)        {
            return "pages/login";
        }

        return "redirect:/pages/dashboard";
    }
    @PostMapping("/doLogin")
    public String doLogin(Model model, @ModelAttribute Accounts account, BindingResult bindingResult) {
        System.out.println("login");
        if(bindingResult.hasErrors()){
            System.out.println("There was a error "+bindingResult);
            System.out.println("Person is: "+ account.getEmail());
            return "pages/login";
        }
        model.addAttribute("account",account);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        account.getEmail(),
                        account.getHashPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        System.out.println(authentication);
        AuthenticationResponse authenticationResponse = accountService.authenticate(account);
        System.out.println(authenticationResponse);
        return "redirect:/pages/dashboard";
    }
}
