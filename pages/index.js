import Head from "next/head";
import { Hero, About, Projects, Experiences, Footer } from "../components";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Hassan Shaitou - Portfolio</title>
        <meta name="description" content="Hassan Shaitou's portfolio developed using Next.js." />
        <meta name="keywords" content="Hassan,hassan,shaitou,software engineer,full stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}
