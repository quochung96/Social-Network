package com.example.memories.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "SEARCHRECENTS")
public class SearchRecentsEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEARCH_ID", nullable = false)
    @TableGenerator(
            name = "SEARCHRECENT_GEN",
            table = "SEQUENCER",
            pkColumnName = "SEQ_NAME",
            valueColumnName = "SEQ_COUNT",
            pkColumnValue = "SEARCH_SEQ_NEXT_VAL"
    )
    private Long searchId;

    @Column(name = "SEARCH_TYPE", nullable = true)
    private Long searchType;

    @Column(name = "KEYWORD", nullable = true)
    @NotBlank(message = "Key work must not be blank")
    private String keyword;

    @Column(name = "PAGE_ID")
    private Long pageId;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    @PastOrPresent(message = "Create Date must be past or present")
    private Date createAt;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    @PastOrPresent(message = "Create Date must be past or present")
    private Date updateAt;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private UsersEntity user;
}
