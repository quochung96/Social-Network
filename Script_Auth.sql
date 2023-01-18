--CREATE SEQUENCE
CREATE SEQUENCE USER_SEQ
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 100
    CYCLE;
--DROP SEQUENCE USER_SEQ;
CREATE SEQUENCE ACCOUNT_SEQ
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 100
    CYCLE;
--DROP SEQUENCE ACCOUNT_SEQ;
CREATE SEQUENCE ROLE_SEQ
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 100
    CYCLE;
--DROP SEQUENCE ROLE_SEQ;

--CREATE TABLE--
CREATE TABLE USERS(
    USER_ID NUMBER(11) DEFAULT USER_SEQ.nextval,
    USER_NAME VARCHAR2(255),
    BIRTHDAY DATE,
    ADDRESS VARCHAR2(255),
    RELATIONSHIP VARCHAR2(255),
    GENDER VARCHAR2(255),
    FOLLOWER NUMBER(11),
    COVER_URL VARCHAR2(255),
    AVATAR_URL VARCHAR2(255),
    CREATE_AT DATE,
    UPDATE_AT DATE,
    CHAT_ID NUMBER(11)
);

CREATE TABLE ACCOUNTS(
    ACC_ID NUMBER(11) DEFAULT ACCOUNT_SEQ.nextval,
    USER_NAME VARCHAR2(20),
    HASH_PASS VARCHAR2(255),
    PHONE_NUM NUMBER(11),
    EMAIL VARCHAR2(255),
    USER_ID NUMBER(11),
    ROLE_ID NUMBER(11),
    IS_ARCHIEVED NUMBER(1),
    CREATE_AT DATE,
    UPDATE_AT DATE
);

CREATE TABLE ACC_ROLES(
    ROLE_ID NUMBER(11) DEFAULT ROLE_SEQ.nextval,
    ROLE_NAME VARCHAR2(255),
    CREATE_AT DATE,
    UPDATE_AT DATE
);

--CREATE PRIMARY KEY--
ALTER TABLE USERS ADD
    CONSTRAINT USER_PK PRIMARY KEY (USER_ID);
ALTER TABLE ACCOUNTS ADD
    CONSTRAINT ACCID_PK PRIMARY KEY (ACC_ID);
ALTER TABLE ACC_ROLES ADD
    CONSTRAINT ROLEID_PK PRIMARY KEY (ROLE_ID);

--CREATE FOREIGN KEY--
--TABLE: ACCOUNTS--
ALTER TABLE ACCOUNTS ADD
    CONSTRAINT ACC_USERID_FK FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID);
ALTER TABLE ACCOUNTS ADD
    CONSTRAINT ACC_ROLEID_FK FOREIGN KEY (ROLE_ID) REFERENCES ACC_ROLES(ROLE_ID);

    
--INSERT DATA--
--TABLE: USERS--
INSERT INTO USERS(USER_NAME, BIRTHDAY,RELATIONSHIP,GENDER, FOLLOWER, CREATE_AT,UPDATE_AT)
VALUES(
	'An',
	TO_DATE('2001-04-22', 'yyyy-mm-dd'),
    'FRIEND',
    'MALE',
	11, 
	TO_DATE(sysdate,'yyyy-mm-dd'),
	TO_DATE(sysdate,'yyyy-mm-dd')
);
INSERT INTO USERS(USER_NAME, BIRTHDAY,RELATIONSHIP,GENDER, FOLLOWER, CREATE_AT,UPDATE_AT)
VALUES(
	'Phuc',
	TO_DATE('2001-04-22', 'yyyy-mm-dd'),
    'FRIEND',
    'MALE',
	11, 
	TO_DATE(sysdate,'yyyy-mm-dd'),
	TO_DATE(sysdate,'yyyy-mm-dd')
);
INSERT INTO USERS(USER_NAME, BIRTHDAY,RELATIONSHIP,GENDER, FOLLOWER, CREATE_AT,UPDATE_AT)
VALUES(
	'Dung',
	TO_DATE('2001-09-11', 'yyyy-mm-dd'),
    'FRIEND',
    'MALE',
	11, 
	TO_DATE(sysdate,'yyyy-mm-dd'),
	TO_DATE(sysdate,'yyyy-mm-dd')
);
INSERT INTO USERS(USER_NAME, BIRTHDAY,RELATIONSHIP,GENDER, FOLLOWER, CREATE_AT,UPDATE_AT)
VALUES(
	'Dat',
	TO_DATE('2001-04-22', 'yyyy-mm-dd'),
    'FRIEND',
    'MALE',
	11, 
	TO_DATE(sysdate,'yyyy-mm-dd'),
	TO_DATE(sysdate,'yyyy-mm-dd')
);
INSERT INTO USERS(USER_NAME, BIRTHDAY,RELATIONSHIP,GENDER, FOLLOWER, CREATE_AT,UPDATE_AT)
VALUES(
	'Hung',
	TO_DATE('2001-04-22', 'yyyy-mm-dd'),
    'FRIEND',
    'MALE',
	11, 
	TO_DATE(sysdate,'yyyy-mm-dd'),
	TO_DATE(sysdate,'yyyy-mm-dd')
);

--TABLE: ACC_ROLES--
INSERT INTO ACC_ROLES(ROLE_NAME, CREATE_AT,UPDATE_AT)
VALUES('ADMIN',TO_DATE(sysdate, 'yyyy-mm-dd'),TO_DATE(sysdate, 'yyyy-mm-dd'));
INSERT INTO ACC_ROLES(ROLE_NAME, CREATE_AT,UPDATE_AT)
VALUES('USER',TO_DATE(sysdate, 'yyyy-mm-dd'),TO_DATE(sysdate, 'yyyy-mm-dd'));
INSERT INTO ACC_ROLES(ROLE_NAME, CREATE_AT,UPDATE_AT)
VALUES('AUDIT',TO_DATE(sysdate, 'yyyy-mm-dd'),TO_DATE(sysdate, 'yyyy-mm-dd'));
INSERT INTO ACC_ROLES(ROLE_NAME, CREATE_AT,UPDATE_AT)
VALUES('MANAGER',TO_DATE(sysdate, 'yyyy-mm-dd'),TO_DATE(sysdate, 'yyyy-mm-dd'));
INSERT INTO ACC_ROLES(ROLE_NAME, CREATE_AT,UPDATE_AT)
VALUES('ACCOUNT',TO_DATE(sysdate, 'yyyy-mm-dd'),TO_DATE(sysdate, 'yyyy-mm-dd'));

--TABLE: ACCOUNT--
INSERT INTO ACCOUNTS(USER_NAME,HASH_PASS, PHONE_NUM, EMAIL, USER_ID, ROLE_ID,IS_ARCHIEVED, CREATE_AT,UPDATE_AT)
VALUES(
	'The AN',
    'ANTESTING123',
	2154554881,
	'an7a3@gmail.com',
	1,
	2,
    1,
	TO_DATE(sysdate, 'yyyy-mm-dd'),
    TO_DATE(sysdate, 'yyyy-mm-dd')
);
INSERT INTO ACCOUNTS(USER_NAME,HASH_PASS, PHONE_NUM, EMAIL, USER_ID, ROLE_ID,IS_ARCHIEVED, CREATE_AT,UPDATE_AT)
VALUES(
	'Hoang Phuc',
    'PHUCTESTING123',
	2154554881,
	'phuc7a3@gmail.com',
	2,
	2,
    1,
	TO_DATE(sysdate, 'yyyy-mm-dd'),
    TO_DATE(sysdate, 'yyyy-mm-dd')
);
INSERT INTO ACCOUNTS(USER_NAME,HASH_PASS, PHONE_NUM, EMAIL,IS_ARCHIEVED, USER_ID, ROLE_ID, CREATE_AT,UPDATE_AT)
VALUES(
	'Anh Dung',
    'DUNGTESTING123',
	335240370,
	'kudung053@gmail.com',
    1,
	3,
	1,
	TO_DATE(sysdate, 'yyyy-mm-dd'),
    TO_DATE(sysdate, 'yyyy-mm-dd')
);
INSERT INTO ACCOUNTS(USER_NAME,HASH_PASS, PHONE_NUM, EMAIL,IS_ARCHIEVED, USER_ID, ROLE_ID, CREATE_AT,UPDATE_AT)
VALUES(
	'Anh Dat',
    'DATTESTING123',
	888333774,
	'dat7a3@gmail.com',
    1,
	4,
	3,
	TO_DATE(sysdate, 'yyyy-mm-dd'),
    TO_DATE(sysdate, 'yyyy-mm-dd')
);
INSERT INTO ACCOUNTS(USER_NAME,HASH_PASS, PHONE_NUM, EMAIL,IS_ARCHIEVED, USER_ID, ROLE_ID, CREATE_AT,UPDATE_AT)
VALUES(
	'Ba Hung',
    'HUNGTESTING123',
	914055773,
	'hung7a3@gmail.com',
    1,
	5,
	4,
	TO_DATE(sysdate, 'yyyy-mm-dd'),
    TO_DATE(sysdate, 'yyyy-mm-dd')
);

--PROCEDURE
create or replace
procedure reset_seq( p_seq_name in varchar2 )
is
    l_val number;
begin
    execute immediate
    'select ' || p_seq_name || '.nextval from dual' INTO l_val;

    execute immediate
    'alter sequence ' || p_seq_name || ' increment by -' || l_val || 
                                                          ' minvalue 0';

    execute immediate
    'select ' || p_seq_name || '.nextval from dual' INTO l_val;

    execute immediate
    'alter sequence ' || p_seq_name || ' increment by 1 minvalue 0';
end;
begin
      reset_seq(USER_SEQ);
--    reset_seq(ACCOUNT_SEQ);
--    reset_seq(ROLE_SEQ);
end;


--DROP ALL THE TABLE
CREATE OR REPLACE PROCEDURE DROP_ALL
IS
BEGIN
    FOR c IN (SELECT table_name FROM user_tables) LOOP
    EXECUTE IMMEDIATE ('DROP TABLE "' || c.table_name || '" CASCADE CONSTRAINTS');
    END LOOP;
    
    FOR s IN (SELECT sequence_name FROM user_sequences) LOOP
    EXECUTE IMMEDIATE ('DROP SEQUENCE ' || s.sequence_name);
    END LOOP;
END;
BEGIN
    DROP_ALL();
END;
