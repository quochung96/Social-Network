package com.example.memories.service.interfaces;

import com.example.memories.model.Accounts;

import java.util.List;

public interface AccountService {
    Accounts createAccount(Accounts account);


    List<Accounts> getAllAccounts();

    boolean deleteAccount(Long id);
    Accounts getAccountById(Long id);

    Accounts updateAccount(Long id, Accounts account);
}
