package com.example.memories.service.interfaces;

import com.example.memories.model.Roles;
import com.example.memories.model.Users;

import java.util.List;

public interface UserService {
    Users createUser(Users user);

    List<Users> getAllUsers();

    boolean deleteUser(Long id);
    Users getUserById(Long id);

    Users updateUser(Long id, Users users);
    Users updateFollowerUser(Long id, Users users);
}
