import { MainLayout } from "../../components/MainLayout";
import { Typography } from "@mui/material";
export default function About() {
  return (
    <MainLayout title={"Author"}>
      <Typography variant="h4" component="h2">
        Author Page
      </Typography>
    </MainLayout>
  );
}
