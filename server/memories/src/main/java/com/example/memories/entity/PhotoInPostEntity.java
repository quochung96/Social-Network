package com.example.memories.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "PHOTOINPOSTS")
public class PhotoInPostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PHOTO_ID",nullable = false)
    private Long photoId;

    @Column(name="IS_HIGHLIGHT", nullable = true)
    private Integer isHighlight;

    @Column(name = "PHOTO_URL", nullable = false)
    private String photoUrl;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT", nullable = true)
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT", nullable = true)
    private Date updateAt;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity post;
}
