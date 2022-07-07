import React from "react";
import { Card, Heading, Paragraph } from "./styles"
import { MdDelete } from "react-icons/md"

const BlogCard = ({ title, author, content, id }) => {
  return (
    <Card>
      <div>
        <Heading>
          <b>author: {author}</b>
          <MdDelete
            style={{
              fontSize: 30,
              color: "rgb(2, 2, 70)",
              marginTop: -5,
              cursor: "pointer",
            }}
            // onClick={() => handleDelete(post)}
          />
        </Heading>
        <b>Title: {title}</b>
        <Paragraph>
          <b>Content: {content}</b>
        </Paragraph>
      </div>
    </Card>
  );
};

export default BlogCard;
