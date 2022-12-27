import React from "react";
import Comment from "./Comment";
function ListComment(props) {
  const listComment = [
    {
      id: 1,
      userName: "user1",
      content: `Lorem ipsum dolor `,
      reaction: {
        like: 0,
        heart: 0,
        haha: 0,
      },
    },
    {
      id: 2,
      userName: "user2",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos saepe voluptates id unde laudantium beatae sint iure. Id
        eius aperiam magni sequi eligendi accusamus.`,
      reaction: {
        like: 0,
        heart: 2,
        haha: 5,
      },
    },
    {
      id: 3,
      userName: "user3",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos saepe voluptates id unde laudantium beatae sint iure. Id
        eius aperiam magni sequi eligendi accusamus. Voluptatem earum sequi
        maiores dolorem!3`,
      reaction: {
        like: 1,
        heart: 2,
        haha: 3,
      },
    },
  ];

  return (
    <React.Fragment>
      {listComment.map((data) => (
        <Comment
          key={data.id}
          userName={data.userName}
          content={data.content}
          reactions={data.reaction}
        />
      ))}
    </React.Fragment>
  );
}

export default ListComment;
