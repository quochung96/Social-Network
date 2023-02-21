package com.example.memories.repository.repositoryTest;

import com.example.memories.entity.AccountsEntity;
import com.example.memories.repository.repositoryJPA.AccountsRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

//@DataJpaTest
@SpringBootTest
public class AccountRepositoryTest {
    @Autowired
    private AccountsRepository accountsRepository;

    @AfterEach //After implement finish testcase will be deleted
    void tearDown(){
        accountsRepository.deleteAll();
    }
    @Test //Testcase
    void getListAccount(){
        List<AccountsEntity> accountsEntities = accountsRepository.findAll();
        assertThat(accountsEntities).isNotNull();
    }
    @Test
    void getAccountById(){
        AccountsEntity accountsEntity;
        if(accountsRepository.findById(1L).isPresent()) {
            accountsEntity = accountsRepository.findById(1L).get();
            assertThat(accountsEntity).isNotNull();
        }
    }
    @Test
    void updateAccount(){
        AccountsEntity accountsEntity;
        if(accountsRepository.findById(1L).isPresent()) {
            accountsEntity = accountsRepository.findById(1L).get();
            AccountsEntity temp = accountsRepository.findById(1L).get();
            accountsEntity.setUserName("Test");
            accountsEntity.setPhone_number(335240370l);
            accountsRepository.save(accountsEntity);
            assertThat(accountsEntity).isNotEqualTo(temp);
        }
    }
    @Test
    void deleteAccount(){
        AccountsEntity accountsEntity;
        if(accountsRepository.findById(1L).isPresent()){
            accountsEntity = accountsRepository.findById(1L).get();
            accountsRepository.delete(accountsEntity);
            assertThat(accountsEntity).isNull();
        }
    }
}
