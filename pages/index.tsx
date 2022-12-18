import Head from "next/head";
import { Inter } from "@next/font/google";

import { Alert } from "flowbite-react";
import { Header } from "../components/layouts/header";
import { FooterMain } from "../components/layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <p className="text-white font-extrabold text-3xl md:text-5xl">
            {" "}
            Ghostwind CSS
          </p>
          <p className="text-xl md:text-2xl text-gray-500">
            {" "}
            Welcome to my Blog{" "}
          </p>
          <p className="text-sky-400">The quick brown fox...</p>
          <Alert color="info">Alert!</Alert>
        </div>
        <FooterMain />
      </main>
    </>
  );
}