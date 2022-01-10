import React from "react";
import Link from "next/link";
import { List, ListItem } from "@mui/material";

export default function Socials({ socials }) {
  return (
    <>
      <List>
        {socials.map((social) => (
          <Link key={social.id} href={social.path} passHref>
            <ListItem>{social.title}</ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
