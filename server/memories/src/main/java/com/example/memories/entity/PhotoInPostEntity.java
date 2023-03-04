package com.example.memories.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
@Entity
@Setter
@Getter
@Table(name = "PHOTOINPOSTS")
public class PhotoInPostEntity implements Serializable {
    public PhotoInPostEntity() {}
    public PhotoInPostEntity(String photoUrl){
        this.photoUrl = photoUrl;
        this.createAt = new Date();
        this.updateAt = new Date();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PHOTO_ID",nullable = false, unique = true)
    @TableGenerator(
            name = "PHOTOINPOST_GEN",
            table = "SEQUENCER",
            pkColumnName = "SEQ_NAME",
            valueColumnName = "SEQ_COUNT",
            pkColumnValue = "PHOTO_SEQ_NEXT_VAL",
            allocationSize = 1
    )
    private Long photoId;

    @Column(name="IS_HIGHLIGHT")
    private Integer isHighlight;

    @Column(name = "PHOTO_URL", nullable = false)
    @NotBlank(message = "PhotoUrl must not be blank")
    private String photoUrl;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity post;
    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT", nullable = true)
    @PastOrPresent(message = "Create Date must be past or present")
    private Date createAt;


    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT", nullable = true)
    @PastOrPresent(message = "Update Date must be past or present")
    private Date updateAt;

}
