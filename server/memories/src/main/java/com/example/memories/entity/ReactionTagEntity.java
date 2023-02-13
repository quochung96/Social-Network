package com.example.memories.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "REACTIONTAG")
public class ReactionTagEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REACT_TAG_ID", nullable = false)
    private Long reactTagId;

    @Column(name = "DESCRIPTION", nullable = true)
    private String description;
}

