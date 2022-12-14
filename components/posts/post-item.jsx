import Link from "next/link";
import Image from "next/image";

import classes from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  //Format Date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //Full path Image
  const imagePath = `/assets/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            style={{ width: "100%" }}
            // placeholder="blur"
            // layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate} </time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
