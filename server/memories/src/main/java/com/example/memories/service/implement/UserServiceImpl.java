package com.example.memories.service.implement;

import com.example.memories.entity.RolesEntity;
import com.example.memories.entity.UsersEntity;
import com.example.memories.model.Roles;
import com.example.memories.model.Users;
import com.example.memories.repository.UsersRepository;
import com.example.memories.service.interfaces.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UsersRepository usersRepository;
    public UserServiceImpl(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    @Override
    public Users createUser(Users user) {
        //Create new role entity
        UsersEntity usersEntity = new UsersEntity();
        //Copy all the properties RoleEntity assigned to Role model
        user.setFollower(0L);
        user.setCreateAt(new Date());
        user.setUpdatedAt(new Date());

        BeanUtils.copyProperties(user, usersEntity);
        usersRepository.save(usersEntity);
        return user;
    }

    @Override
    public List<Users> getAllUsers() {
        //Get all list of USERS with Spring Data JPA query
        // Select * from USERS;
        List<UsersEntity> usersEntities = usersRepository.findAll();
        //Get all the USERS
        List<Users> users = usersEntities.
                stream()
                .map(us -> new Users(
                        us.getUser_id(),
                        us.getUserName(),
                        us.getBirth_day(),
                        us.getAddress(),
                        us.getRelationship(),
                        us.getGender(),
                        us.getFollower(),
                        us.getAvatar_url(),
                        us.getCover_url(),
                        us.getCreateAt(),
                        us.getUpdateAt()
                )).collect(Collectors.toList());
        return users;
    }

    @Override
    public boolean deleteUser(Long id) {
        //SELECT * from USERS
        //WHERE USER_ID = id;
        UsersEntity user = usersRepository.findById(id).get();
        //DELETE FROM USERS
        //WHERE USER_ID = id;
        usersRepository.delete(user);
        return true;
    }

    @Override
    public Users getUserById(Long id) {
        //SELECT * from USERS
        //WHERE USER_ID = id;
        UsersEntity usersEntity = usersRepository.findById(id).get();
        Users users = new Users();
        // Assign all the properties USERProperties to users
        BeanUtils.copyProperties(usersEntity, users);
        return users;
    }

    @Override
    public Users updateUser(Long id, Users user) {
        //SELECT * from USERS
        //WHERE USER_ID = id;
        UsersEntity usersEntity = usersRepository.findById(id).get();
        //UPDATE USERS
        //SET ROLE_NAME = role
        //WHERE ROLE_ID = id;
        usersEntity.setUserName(user.getUserName());
        usersEntity.setBirth_day(user.getBirth_day());
        usersEntity.setAddress(user.getAddress());
        usersEntity.setRelationship(user.getRelationship());
        usersEntity.setFollower(user.getFollower());
        usersEntity.setGender(user.getGender());
        usersEntity.setCover_url(user.getCover_url());
        usersEntity.setAvatar_url(user.getAvatar_url());
        usersEntity.setUpdateAt(new Date());
        usersRepository.save(usersEntity);
        return user;
    }

    @Override
    public Users updateFollowerUser(Long id, Users user) {
        UsersEntity usersEntity = usersRepository.findById(id).get();
        usersEntity.setFollower(user.getFollower() + 1);
        usersEntity.setUpdateAt(new Date());
        usersRepository.save(usersEntity);
        return user;
    }
}
