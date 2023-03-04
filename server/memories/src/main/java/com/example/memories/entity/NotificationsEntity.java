package com.example.memories.entity;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "NOTIFICATIONS")
@Transactional(rollbackOn = Exception.class)
public class NotificationsEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NOTI_ID", nullable = false, unique = true)
    @TableGenerator(name = "NOTIFICAITON_GEN",
                    table = "SEQUENCER",
                    pkColumnName = "SEQ_NAME",
                    valueColumnName = "SEQ_COUNT",
                    pkColumnValue = "NOTI_SEQ_NEXT_VAL",
                    allocationSize = 1
    )
    private Long notiId;

    @Column(name = "IS_SEEN", nullable = true)
    private Integer isSeen;

    @Temporal(TemporalType.DATE)
    @PastOrPresent(message = "Create Date must be past or present")
    @Column(name = "CREATE_AT", nullable = false)
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @PastOrPresent(message = "Update Date must be past or present")
    @Column(name = "UPDATE_AT", nullable = true)
    private Date updateAt;

    @Column(name = "NOTI_TYPE", nullable = true)
    private Long notiType;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity user;

    @ManyToOne
    @JoinColumn(name = "POST_ID")
    private PostsEntity post;

    @Column(name = "IS_POPULAR", nullable = true)
    private Integer isPopular;
}
