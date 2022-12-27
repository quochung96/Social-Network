import React from "react";
import userLogo from "../../assets/icons/google 1.png";
import "./placeholderStyle.css";
function AddComment() {
  const styles = {
    wrapper: "flex flex-row gap-x-[10px] mt-[1rem]",
    userImg: "rounded-full h-[40px] w-[40px] mt-[0.25rem] cursor-pointer",
    input:
      "bg-[#D9D9D9] bg-opacity-60 w-[50rem] max-w-[50rem] max-h-[45rem] rounded-[20px] px-[1rem] py-[0.5rem]",
  };
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.userImg}>
          <img src={userLogo} style={{ width: "40px", height: "40px" }} />
        </div>
        <div
          className={styles.input}
          contenteditable="true"
          placeholder="Add a comment..."
        ></div>
      </div>
    </React.Fragment>
  );
}

export default AddComment;
