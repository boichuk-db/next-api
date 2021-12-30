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
      <Link href={"/"} passHref>
        <Button variant="outlined">Go back to home</Button>
      </Link>
      <Link href={"/posts"} passHref>
        <Button variant="outlined">Go back to posts</Button>
      </Link>
      <Socials socials={socials} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseAbout = await fetch(`${process.env.SERVER_API_URL}/about`);
  const about = await responseAbout.json();

  const responseSocials = await fetch(`${process.env.API_URL}/socials`);
  const socials = await responseSocials.json();
  return {
    props: { title: about.title, socials: socials },
  };
};
