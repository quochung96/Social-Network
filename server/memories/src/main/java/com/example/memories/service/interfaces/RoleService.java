package com.example.memories.service.interfaces;

import com.example.memories.model.Accounts;
import com.example.memories.model.Roles;

import java.util.List;

public interface RoleService {
    Roles createRole(Roles role);

    List<Roles> getAllRoles();

    boolean deleteRole(Long id);
    Roles getRoleById(Long id);

    Roles updateRole(Long id, Roles role);
}
