package com.example.memories.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "REACTIONS")
public class ReactionsEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REACT_ID", nullable = false)
    @TableGenerator(
            name = "REACTION_GEN",
            table = "SEQUENCER",
            pkColumnName = "SEQ_NAME",
            valueColumnName = "SEQ_COUNT",
            pkColumnValue = "REACTION_SEQ_NEXT_VAL",
            allocationSize = 1
    )
    private Long reactId;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    @PastOrPresent(message = "Create Date must be past or present")
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    @PastOrPresent(message = "Update Date must be past or present")
    private Date updateAt;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity postId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity userId;

    @ManyToOne
    @JoinColumn(name = "CMT_ID")
    private CommentsEntity cmtId;

}

