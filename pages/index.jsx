import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const FeaturedPosts = getFeaturedPosts();

  return {
    props: {
      posts: FeaturedPosts,
    },
    revalidate: 1800,
  };
};
