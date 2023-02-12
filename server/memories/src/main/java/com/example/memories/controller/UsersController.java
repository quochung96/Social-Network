package com.example.memories.controller;

import com.example.memories.model.Roles;
import com.example.memories.model.Users;
import com.example.memories.service.interfaces.RoleService;
import com.example.memories.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UsersController {
    @Autowired
    private final UserService userService;

    public UsersController(UserService userService){
        this.userService = userService;
    }
    @PostMapping("/users")
    public Users createUser(@RequestBody Users user){
        return userService.createUser(user);
    }
    @GetMapping("/users")
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Long id){
        boolean deleted = false;
        deleted = userService.deleteUser(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id){
        Users user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable Long id, @RequestBody Users user){
        user = userService.updateUser(id, user);
        return ResponseEntity.ok(user);
    }
    @PutMapping("/users/{id}/follower")
    public ResponseEntity<Users> updateFollowerUser(@PathVariable Long id, @RequestBody Users user){
        user = userService.updateFollowerUser(id,user);
        return ResponseEntity.ok(user);
    }
}
