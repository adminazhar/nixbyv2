import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";

function Posts({ data }) {
  const router = useRouter();
  const { id } = router.query;
}

export async function getServerSideProps(context) {
  const query = context.query;
  let slug = null;
  if (Array.isArray(query.slug)) {
    slug = query.slug.join("/");
  } else if (typeof query.slug === "string") {
    slug = query.slug as string;
  }

  console.log("SLUG:", slug);

  // Pass data to the page via props
  return { props: { slug } };
}

export default Posts;
