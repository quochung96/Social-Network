package com.example.memories.entity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

/*
    @author Anh Dung
 */

@Entity
@Setter
@Getter
@Table(name = "ACC_ROLES")
public class RolesEntity implements Serializable {
    public RolesEntity() {}
    public RolesEntity(String roleName){
        this.roleName = roleName;
        this.createAt = new Date();
        this.updateAt = new Date();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ROLE_ID", nullable = false)
    @TableGenerator(
            name = "ROLE_GEN",
            table = "SEQUENCER",
            pkColumnName = "SEQ_NAME",
            valueColumnName = "SEQ_COUNT",
            pkColumnValue = "ROLE_SEQ_NEXT_VAL",
            allocationSize = 1
    )
    private Long role_id;

    @Column(name = "ROLE_NAME", nullable = false)
    @NotBlank(message = "Rolename must not be blank")
    private String roleName;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATE_AT")
    @PastOrPresent(message = "Create Date must be past or present")
    private Date createAt;
    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATE_AT")
    @PastOrPresent(message = "Update Date must be past or present")
    private Date updateAt;

}
