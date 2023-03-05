package com.example.memories.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

/*
    @author Anh Dung
 */

@Entity
@Setter
@Getter
@Table(name = "ACC_ROLES")
public class RolesEntity {
    public RolesEntity() {}
    public RolesEntity(String roleName){
        this.roleName = roleName;
        this.createAt = LocalDateTime.now();
        this.updateAt = LocalDateTime.now();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ROLE_ID", nullable = false)
    private Long role_id;

    @Column(name = "ROLE_NAME", nullable = false)
    private String roleName;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "CREATE_AT")
    private LocalDateTime createAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "UPDATE_AT")
    private LocalDateTime updateAt;

}
