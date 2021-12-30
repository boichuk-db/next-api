import React from "react";
import Link from "next/link";

export default function Socials({ socials }) {
  return (
    <>
      {socials.map((social) => (
        <Link key={social.id} href={social.path}>
          {social.icon}
        </Link>
      ))}
    </>
  );
}
