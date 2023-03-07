package com.example.memories.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "chat_message")
public class MessageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MESS_ID",nullable = false,unique = true)
    private Long id;
    @Column(name = "CONTENT",nullable = false)
    private String content;

    @Column(name = "CREATE_AT",nullable = false)
    private LocalDateTime createAt;
}
