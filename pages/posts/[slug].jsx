import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const SinglePostPage = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
  };
};

// If a want to create the post on the air

// export const getStaticPath = () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

export const getStaticPaths = async () => {
  const postFilenames = getPostsFiles();
  console.log("POST FILENAME: ", postFilenames);

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default SinglePostPage;
