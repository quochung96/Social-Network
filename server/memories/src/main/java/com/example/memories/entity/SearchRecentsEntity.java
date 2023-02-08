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
@Table(name = "SEARCHRECENTS")
public class SearchRecentsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEARCH_ID", nullable = false)
    private Long searchId;

    @Column(name = "SEARCH_TYPE", nullable = true)
    private Long searchType;

    @Column(name = "KEYWORD", nullable = true)
    private String keyword;

    @Column(name = "PAGE_ID")
    private Long pageId;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    private Date updateAt;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity user;
}
