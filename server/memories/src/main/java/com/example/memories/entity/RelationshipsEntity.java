package com.example.memories.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="RELATIONSHIPS")
public class RelationshipsEntity {
    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    private Date createAt;
    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_At")
    private Date updateAt;

    @Id
    @OneToOne
    @JoinColumn(name = "USER1_ID")
    private UsersEntity users1;

    @Id
    @OneToOne
    @JoinColumn(name = "USER1_ID")
    private UsersEntity users2;
    @Column(name = "IS_ARCHIEVED")
    private int isArchieved;
}
