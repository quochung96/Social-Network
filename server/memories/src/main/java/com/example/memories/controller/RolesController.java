package com.example.memories.controller;

import com.example.memories.model.Roles;
import com.example.memories.service.interfaces.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RolesController {
    @Autowired
    private final RoleService roleService;

    public RolesController(RoleService roleService){
        this.roleService = roleService;
    }
    @PostMapping("/role")
    public Roles createRole(@RequestBody Roles role){
        return roleService.createRole(role);
    }
    @GetMapping("/role")
    public List<Roles> getAllRoles() {
        return roleService.getAllRoles();
    }
    @DeleteMapping("/role/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteRole(@PathVariable Long id){
        boolean deleted = false;
        deleted = roleService.deleteRole(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/role/{id}")
    public ResponseEntity<Roles> getRoleById(@PathVariable Long id){
        Roles role = roleService.getRoleById(id);
        return ResponseEntity.ok(role);
    }
    @PutMapping("/role/{id}")
    public ResponseEntity<Roles> updateRole(@PathVariable Long id, @RequestBody Roles role){
        role = roleService.updateRole(id, role);
        return ResponseEntity.ok(role);
    }
}
