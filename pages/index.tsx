import { Typography } from "@mui/material";
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <Typography variant="h4" component="h2">
        Hello Page
      </Typography>
      <Typography variant="body1">
        <Link href={"/about"}>About</Link>
      </Typography>
      <Typography variant="body1">
        <Link href={"/posts"}>Posts</Link>
      </Typography>
    </MainLayout>
  );
}
