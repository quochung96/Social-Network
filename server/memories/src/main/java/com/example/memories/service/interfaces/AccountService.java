package com.example.memories.service.interfaces;

import com.example.memories.builder.AuthenticationResponse;
import com.example.memories.model.Accounts;

import java.util.List;

public interface AccountService {
    AuthenticationResponse createAccount(Accounts account) throws Exception; //Done
    AuthenticationResponse authenticate(Accounts account);
    List<Accounts> getAllAccounts();
    List<Accounts> getAllAccountsByRoleId(Long roleId);
    boolean deleteAccount(Long id);
    boolean softDeleteAccount(Long id);
    boolean recoverAccount(Long id);
    Accounts getAccountById(Long id);
    Accounts updateAccount(Long id, Accounts account);
    List<Accounts> getRecentAccountRegister();
}
