import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import { Typography, Button } from "@mui/material";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost;
}

export default function Post({ post }: PostPageProps) {
  return (
    <MainLayout>
      <Typography variant="h4">{post.title}</Typography>
      <hr />
      <Typography>{post.body}</Typography>
      <Link href={"/posts"}>
        <Button variant="outlined">Back to Posts</Button>
      </Link>
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

export const getServerSideProps = async ({
  query,
  req,
}: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return { props: { post } };
};

//====================================================================
//Alternative Variant

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { MainLayout } from "../../components/MainLayout";
// import { Typography, Button } from "@mui/material";

// export default function Post({ post: serverPost }) {
//   const [post, setPost] = useState(serverPost);
//   const router = useRouter();
//   useEffect(() => {
//     async function load() {
//       const response = await fetch(
//         `http://localhost:4200/posts/${router.query.id}`
//       );
//       const data = await response.json();
//       setPost(data);
//     }
//     if (!serverPost) {
//       load();
//     }
//   }, []);

//   if (!post) {
//     return (
//       <MainLayout>
//         <Typography variant="h4">Loading...</Typography>
//       </MainLayout>
//     );
//   }
//   return (
//     <MainLayout>
//       <Typography variant="h4">{post.title}</Typography>
//       <hr />
//       <Typography>{post.body}</Typography>
//       <Link href={"/posts"}>
//         <Button variant="outlined">Back to Posts</Button>
//       </Link>
//     </MainLayout>
//   );
// }

// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null };
//   }

//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();

//   return {
//     post,
//   };
// };
