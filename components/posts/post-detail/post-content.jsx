import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imagePath = `/assets/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
