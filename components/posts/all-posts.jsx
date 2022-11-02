import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

const AllPosts = ({ posts }) => {
  return (
    <div className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </div>
  );
};

export default AllPosts;
