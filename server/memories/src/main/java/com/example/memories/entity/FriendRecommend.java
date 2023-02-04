package com.example.memories.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="FRIENDRECOMMEND")
public class FriendRecommend {
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
}
