package com.example.memories.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="FRIENDRECOMMEND")
public class FriendRecommend {
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "CREATE_AT")
    private LocalDateTime createAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "UPDATE_At")
    private LocalDateTime updateAt;

    @Id
    @OneToOne
    @JoinColumn(name = "USER1_ID")
    private UsersEntity users1;

    @Id
    @OneToOne
    @JoinColumn(name = "USER1_ID")
    private UsersEntity users2;
}
