import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <Video />
      <About />
      <Benefits />
    </div>
  );
}