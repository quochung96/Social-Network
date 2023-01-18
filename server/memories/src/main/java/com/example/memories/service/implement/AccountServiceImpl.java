package com.example.memories.service.implement;

import com.example.memories.entity.AccountsEntity;
import com.example.memories.entity.RolesEntity;
import com.example.memories.entity.UsersEntity;
import com.example.memories.model.Accounts;
import com.example.memories.repository.AccountsRepository;
import com.example.memories.repository.RolesRepository;
import com.example.memories.repository.UsersRepository;
import com.example.memories.service.interfaces.AccountService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountServiceImpl implements AccountService {
    private AccountsRepository accountsRepository;
//    @Autowired
    private RolesRepository rolesRepository;

    private UsersRepository usersRepository;
    private PasswordEncoder passwordEncoder;

    //Constructor
    public AccountServiceImpl(AccountsRepository accountsRepository,UsersRepository usersRepository, RolesRepository rolesRepository, PasswordEncoder passwordEncoder){
        this.accountsRepository = accountsRepository;
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public Accounts createAccount(Accounts account) {

        //Create new account entity
        AccountsEntity accountsEntity = new AccountsEntity();
        //Copy all the properties accountEntity assigned to account model
        //Set all the parameters from front-end login by the USER ROLE
        // Hashed Password when create new account
        String encodedPassword= passwordEncoder.encode(account.getHashPassword());
        account.setHashPassword(encodedPassword);
        account.setCreateAt(new Date());
        account.setUpdateAt(new Date());
        RolesEntity roles = rolesRepository.findByRoleName("USER").get();
        account.setRoles(roles);
        //Khi tạo 1 Entity mới cần phải lưu vào DB trước khi flush -> Gen user trc khi tạo foreign key trong Account
        UsersEntity users = new UsersEntity(account.getUserName());
        usersRepository.save(users);
        account.setUsers(users);

        account.setIsArchieved(0);
        BeanUtils.copyProperties(account, accountsEntity);
        accountsRepository.save(accountsEntity);
        return account;
    }


    @Override
    public List<Accounts> getAllAccounts() {
        //Get all list of accounts with Spring Data JPA query
        // Select * from accounts;
        List<AccountsEntity> accountsEntities = accountsRepository.findAll();
        //Get all the accounts
        List<Accounts> accounts = accountsEntities.
                stream()
                .map(acc -> new Accounts(
                        acc.getAcc_id(),
                        acc.getUserName(),
                        acc.getHashPassword(),
                        acc.getPhone_number(),
                        acc.getEmail(),
                        acc.getIsArchieved(),
                        acc.getRoles(),
                        acc.getUsers(),
                        acc.getCreateAt(),
                        acc.getUpdateAt()
                )).collect(Collectors.toList());
        return accounts;
    }

    @Override
    public boolean deleteAccount(Long id) {
        //SELECT * from ACCOUNTS
        //WHERE ACC_ID = id;
        AccountsEntity account = accountsRepository.findById(id).get();
        //DELETE FROM ACCOUNTS
        //WHERE ACC_ID = id;
        accountsRepository.delete(account);
        return true;
    }

    @Override
    public Accounts getAccountById(Long id) {
        //SELECT * from ACCOUNTS
        //WHERE ACC_ID = id;
        AccountsEntity accountsEntity = accountsRepository.findById(id).get();
        Accounts account = new Accounts();
        // Assign all the properties AccountEntity to account
        BeanUtils.copyProperties(accountsEntity, account);
        return account;
    }

    @Override
    public Accounts updateAccount(Long id, Accounts account) {
        //SELECT * from ACC_ROLES
        //WHERE ROLE_ID = id;
        AccountsEntity accountsEntity = accountsRepository.findById(id).get();
        //UPDATE ACCOUNTS
        //SET PHONE_NUM = phone_number
        //WHERE ACC_ID = id;
        accountsEntity.setPhone_number(account.getPhone_number());
        accountsEntity.setEmail(account.getEmail());
        accountsEntity.setUpdateAt(new Date());
        return account;
    }
}
