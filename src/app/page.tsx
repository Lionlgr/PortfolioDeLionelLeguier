import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hackathons } from "@/components/Hackathons";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Hackathons />
        <Experience />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
