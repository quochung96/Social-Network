package com.example.memories.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


import java.util.Date;

@Entity
@Setter
@Getter
@Table(name = "ACCOUNTS")
public class AccountsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ACC_ID", nullable = false)
    private Long acc_id;

    @Column(name = "USER_NAME", nullable = false)
    private String userName;

    @Column(name = "HASH_PASS", nullable = false)
    private String hashPassword;

    @Column(name = "PHONE_NUM")
    private Long phone_number;

    @Column(name = "EMAIL", nullable = false)
    private String email;

    @Column(name = "IS_ARCHIEVED")
    private int isArchieved;

    //MappyBy trỏ tới biến accounts ở trong roles
    @ManyToOne
    @JoinColumn(name = "ROLE_ID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private RolesEntity roles;

    @OneToOne //Đánh dấu quan hệ 1-1 với User
    @JoinColumn(name = "USER_ID") // Liên kết với nhau qua khóa ngoại USER_ID
    private UsersEntity users;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    private Date createAt;
    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    private Date updateAt;
}
