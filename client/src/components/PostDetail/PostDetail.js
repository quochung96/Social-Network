import React from "react";
import NavbarHomePage from "../HomePage/NavbarHomePage/NavbarHomePage";
import ListComment from "./ListComment";
import AddComment from "./AddComment";
import testImg from "../../assets/images/dog.png";
import userLogo from "../../assets/icons/google 1.png";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import heart from "../../assets/icons/heart.svg";
import like from "../../assets/icons/thumb-up.svg";
import tongue from "../../assets/icons/tongue.svg";

function PostDetail() {
  const testContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
    dignissimos saepe voluptates id unde laudantium beatae sint iure. Id
    eius aperiam magni sequi eligendi accusamus. Voluptatem earum sequi
    maiores dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
    dignissimos saepe voluptates id unde laudantium beatae sint iure. Id
    eius aperiam magni sequi eligendi accusamus. Voluptatem earum sequi
    maiores dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
    dignissimos saepe voluptates id unde laudantium beatae sint iure. Id
    eius aperiam magni sequi eligendi accusamus. Voluptatem earum sequi
    maiores dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
    dignissimos saepe voluptates id unde laudantium beatae sint iure. Id
    eius aperiam magni sequi eligendi  accusamus. Voluptatem earum sequi
    maiores dolorem!`;
  const styles = {
    wrapper:
      "flex flex-col p-4 m-auto max-w-[60rem] w-[60rem] bg-[white] rounded-xl mb-[4rem] ",
    user: "flex flex-row gap-x-[0.5rem] ",
    userName: "text-[1rem] font-[500] cursor-pointer hover:underline",
    time: "text-[0.75rem] cursor-pointer hover:underline",
    detail: "flex flex-col justify-around my-[16px] gap-y-[1rem]",
    content: "text-[1rem]   ",
    contentImg: "flex justify-center",
    userImg: "rounded-full h-[40px] w-[40px] cursor-pointer",
    reactions: "flex flex-row",
    feature: "flex flex-row justify-center gap-x-[20rem] m-[5px]",
    button: "cursor-pointer font-medium hover:text-[#1877F2]",
  };
  return (
    <React.Fragment>
      <NavbarHomePage />
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <div className={styles.userImg}>
            <img src={userLogo} style={{ width: "40px", height: "40px" }} />
          </div>
          <div>
            <div className={styles.userName}>User name</div>
            <div className={styles.time}>3 hour ago</div>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.content}>{testContent}</div>
          <div className={styles.contentImg}>
            <img src={testImg} style={{ width: "42.5rem" }} />
          </div>
        </div>
        <div className={styles.reactions}>
          <img src={like}/>
          <img src={heart}/>
          <img src={tongue}/>
        </div>
        <hr />
        <div className={styles.feature}>
          <div className={styles.button}>
            <ThumbUpAltIcon /> Like
          </div>
          <div className={styles.button}>
            <CommentIcon /> Comment
          </div>
          <div className={styles.button}>
            <ShareIcon /> Share
          </div>
        </div>
        <hr />
        <AddComment />
        <ListComment />
      </div>
    </React.Fragment>
  );
}

export default PostDetail;
