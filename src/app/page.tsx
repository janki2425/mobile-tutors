import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <Video />
      <About />
    </div>
  );
}