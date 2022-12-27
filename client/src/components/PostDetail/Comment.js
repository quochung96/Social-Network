import React, { useState } from "react";
import userLogo from "../../assets/icons/google 1.png";

import heart from "../../assets/icons/heart.svg";
import like from "../../assets/icons/thumb-up.svg";
import tongue from "../../assets/icons/tongue.svg";

function Comment(props) {
  const [countReaction, setCountReaction] = useState(
    props.reactions.like + props.reactions.heart + props.reactions.haha
  );
  const styles = {
    wrapper: "flex flex-row gap-x-[10px] mt-[1rem]",
    commentContainer:
      "flex flex-col justify-center px-[1rem] py-[0.5rem] max-w-[50rem] max-h-[42rem] flex-col bg-[#D9D9D9] bg-opacity-60 rounded-[20px]",
    userName: "font-[400] w-fit cursor-pointer hover:underline",
    userImg: "rounded-full h-[30px] w-[30px] mt-[0.25rem] cursor-pointer",
    content: "text-[1rem] font-[300]",
    featureContainer: "flex flex-row gap-x-[0.5rem] ml-[1rem] font-[300]",
    feature: "cursor-pointer hover:underline font-[500]",
    reactions: "flex flex-row",
    icons: "flex flex-row ",
  };
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.userImg}>
          <img src={userLogo} style={{ width: "30px", height: "30px" }} />
        </div>
        <div>
          <div className={styles.commentContainer}>
            <div className={styles.userName}>{props.userName}</div>
            <div className={styles.content}>{props.content}</div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.feature}>Like</div>
            <div className={styles.reactions}>
              <div className={styles.icons}>
                {props.reactions.like !== 0 && <img src={like} />}
                {props.reactions.heart !== 0 && <img src={heart} />}
                {props.reactions.haha !== 0 && <img src={tongue} />}
              </div>
              <div>{countReaction !== 0 && countReaction}</div>
            </div>
            <div className={styles.feature}>Reply</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Comment;
