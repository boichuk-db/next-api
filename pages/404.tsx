import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import { Button, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <MainLayout>
      <Typography variant="h4" component="h2" color="error">
        Error Page
      </Typography>
      <Link href={"/"} passHref>
        <Button variant="contained">Back to safety</Button>
      </Link>
    </MainLayout>
  );
}
