package com.example.memories.service.implement;

import com.example.memories.entity.RolesEntity;
import com.example.memories.model.Roles;
import com.example.memories.repository.repositoryJPA.RolesRepository;
import com.example.memories.service.interfaces.RoleService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/*
    @author Anh Dung
 */
@Service
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    //Constructor
    private RolesRepository rolesRepository;
    @Override
    public Roles createRole(Roles role) {
        //Create new role entity
        RolesEntity roleEntity = new RolesEntity();
        //Copy all the properties RoleEntity assigned to Role model
        BeanUtils.copyProperties(role, roleEntity);
        rolesRepository.save(roleEntity);
        return role;
    }

    @Override
    public List<Roles> getAllRoles() {
        //Get all list of roles with Spring Data JPA query
        // Select * from roles;
        List<RolesEntity> rolesEntities = rolesRepository.findAll();
        //Get all the roles
        List<Roles> roles = rolesEntities.
                stream()
                .map(rol -> new Roles(
                        rol.getRole_id(),
                        rol.getRoleName(),
                        rol.getCreateAt(),
                        rol.getUpdateAt()
                )).collect(Collectors.toList());
        return roles;
    }

    @Override
    public boolean deleteRole(Long id) {
        //SELECT * from ACC_ROLES
        //WHERE ROLE_ID = id;
        RolesEntity role = rolesRepository.findById(id).get();
        //DELETE FROM ROLES
        //WHERE ROLE_ID = id;
        rolesRepository.delete(role);
        return true;
    }

    @Override
    public Roles getRoleById(Long id) {
        //SELECT * from ACC_ROLES
        //WHERE ROLE_ID = id;
        RolesEntity rolesEntity = rolesRepository.findById(id).get();
        Roles roles = new Roles();
        // Assign all the properties roleEntity to roles
        BeanUtils.copyProperties(rolesEntity, roles);
        return roles;
    }

    @Override
    public Roles updateRole(Long id, Roles role) {
        //SELECT * from ACC_ROLES
        //WHERE ROLE_ID = id;
        RolesEntity rolesEntity = rolesRepository.findById(id).get();
        //UPDATE ACC_ROLES
        //SET ROLE_NAME = role
        //WHERE ROLE_ID = id;
        rolesEntity.setRoleName(role.getRoleName());
        rolesEntity.setUpdateAt(new Date());

        rolesRepository.save(rolesEntity);
        return role;
    }
}
