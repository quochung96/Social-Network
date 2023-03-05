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

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "CREATE_AT")
    private LocalDateTime createAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "UPDATE_AT")
    private LocalDateTime updateAt;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity user;
}
