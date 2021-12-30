import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import { Typography, Button } from "@mui/material";
import Socials from "../../components/Socials";
import { GetServerSideProps } from "next";

export default function About({ title, socials }) {
  return (
    <MainLayout title={"About"}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Link href={"/"}>
        <Button variant="outlined">Go back to home</Button>
      </Link>
      <Link href={"/posts"}>
        <Button variant="outlined">Go back to posts</Button>
      </Link>
      <Socials socials={socials} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseAbout = await fetch("http://localhost:4200/about");
  const about = await responseAbout.json();

  const responseSocials = await fetch("http://localhost:3000/api/socials");
  const socials = await responseSocials.json();
  return {
    props: { title: about.title, socials: socials },
  };
};
