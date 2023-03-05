package com.example.memories.service.implement;

import com.example.memories.builder.AccountBuilder;
import com.example.memories.builder.AuthenticationResponse;
import com.example.memories.config.JwtService;
import com.example.memories.entity.AccountsEntity;
import com.example.memories.entity.RolesEntity;
import com.example.memories.entity.UsersEntity;
import com.example.memories.model.Accounts;
import com.example.memories.repository.repositoryJPA.AccountBuilderRepository;
import com.example.memories.repository.repositoryJPA.AccountsRepository;
import com.example.memories.repository.repositoryJPA.RolesRepository;
import com.example.memories.repository.repositoryJPA.UsersRepository;
import com.example.memories.service.interfaces.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
/*
    @author Anh Dung
 */
@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService{
    private final AccountsRepository accountsRepository;
    private final RolesRepository rolesRepository;
    private final UsersRepository usersRepository;
    private final AccountBuilderRepository accountBuilderRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    //Constructor
    @Override
    public AuthenticationResponse createAccount(Accounts account) throws Exception {
        try {
            //Tạo một Account Entity Constructor
            AccountsEntity accountsEntity = new AccountsEntity();
            //Kiểm tra account có trong database hay k ? Nếu có thì throw exception
            if (accountsRepository.findByEmail(account.getEmail()).isPresent()) {
                throw new Exception("User exists");
            }
            // Set all the parameters from front-end login by the USER ROLE
            // Hashed Password when create new account
            String encodedPassword = passwordEncoder.encode(account.getHashPassword());
            account.setHashPassword(encodedPassword);
            // Default set
            account.setCreateAt(LocalDateTime.now());
            account.setUpdateAt(LocalDateTime.now());
            //IF the database doesn't exist -> Insert a new
            if (!rolesRepository.findByRoleName("USER").isPresent()) {
                RolesEntity roles = new RolesEntity("USER");
                rolesRepository.save(roles);
            }
            RolesEntity roles = rolesRepository.findByRoleName("USER").get();
            account.setRoles(roles);
            account.setIsArchieved(0);
            //Khi tạo 1 Entity mới cần phải lưu vào DB trước khi flush -> Gen user trc khi tạo foreign key trong Account
            UsersEntity users = new UsersEntity(account.getUserName());
            usersRepository.save(users);
            account.setUsers(users);
            //Copy tất cả những thuộc tính còn lại qua account Entity --> Save vào database
            BeanUtils.copyProperties(account, accountsEntity);
            accountsRepository.save(accountsEntity);
            //Tạo một Builder mới dùng để tạo token xác thực
            var user = AccountBuilder.builder()
                    .name(account.getUserName())
                    .email(account.getEmail())
                    .hashPassword(encodedPassword)
                    .isArchieved(0)
                    .roles(roles)
                    .createAt(new Date())
                    .updateAt(new Date())
                    .build();
            // Tạo token
            var jwtToken = jwtService.generateToken(user);
            Long user_id = accountsRepository.findByEmail(account.getEmail()).get().getUsers().getUser_id();
            // Trả về token và builder result account khi tạo 1 user mới xong
            return AuthenticationResponse.builder().token(jwtToken)
                    .user_id(user_id)
                    .result(user)
                    .build();
        }
        catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public AuthenticationResponse authenticate(Accounts account) {
        // Khi token được gen từ front-end -> qua lớp authentication manager
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        account.getEmail(),
                        account.getHashPassword()
                )
        );
        // Tìm xem account có email đó hay chưa --> Nếu chưa có thì throw exception
        AccountBuilder user = accountBuilderRepository.findByEmail(account.getEmail())
                .orElseThrow();

        Long user_id = accountsRepository.findByEmail(account.getEmail()).get().getUsers().getUser_id();
        //Gen token ra
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().token(jwtToken).
                result(user).
                user_id(user_id).
                build();
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
//        account.setIsArchieved(1);
//        accountsRepository.save(account);
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
        accountsEntity.setUpdateAt(LocalDateTime.now());
        accountsRepository.save(accountsEntity);
        return account;
    }
}
