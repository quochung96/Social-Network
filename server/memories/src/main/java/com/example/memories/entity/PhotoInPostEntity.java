package com.example.memories.entity;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Entity
@Setter
@Getter
@Table(name = "PHOTOINPOSTS")
public class PhotoInPostEntity {
    public PhotoInPostEntity() {}
    public PhotoInPostEntity(String photoUrl){
        this.photoUrl = photoUrl;
        this.createAt = LocalDateTime.now();
        this.updateAt = LocalDateTime.now();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PHOTO_ID",nullable = false)
    private Long photoId;

    @Column(name="IS_HIGHLIGHT")
    private Integer isHighlight;

    @Column(name = "PHOTO_URL")
    private String photoUrl;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "CREATE_AT", nullable = true)
    private LocalDateTime createAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "UPDATE_AT", nullable = true)
    private LocalDateTime updateAt;

}
