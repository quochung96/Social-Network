package com.example.memories.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Entity
@Setter
@Getter
@Table(name = "PHOTOINPOSTS")
public class PhotoInPostEntity {
    public PhotoInPostEntity() {}
    public PhotoInPostEntity(String photoUrl){
        this.photoUrl = photoUrl;
        this.createAt = new Date();
        this.updateAt = new Date();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PHOTO_ID",nullable = false)
    private Long photoId;

    @Column(name="IS_HIGHLIGHT")
    private Integer isHighlight;

    @Column(name = "PHOTO_URL", nullable = false)
    private String photoUrl;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity post;
    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT", nullable = true)
    private Date createAt;


    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT", nullable = true)
    private Date updateAt;

}
