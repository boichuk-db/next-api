import { MainLayout } from "../components/MainLayout";
import { Typography } from "@mui/material";
import Link from "next/link";
import { MyPost } from "../interfaces/post";
import { GetServerSideProps } from "next";

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <MainLayout title={"Posts"}>
      <Typography variant="h4" component="h2">
        Posts Page
      </Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const data: MyPost = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { posts: data } };
};
