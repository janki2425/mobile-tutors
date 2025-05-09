import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import SuccessStory from "@/components/SuccessStory";
import OutCourse from "@/components/OurCourse";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
export default function Home() {
  return (
    <div className="mx-auto">
      <Hero />
      <Video />
      <About />
      <Benefits />
      <SuccessStory />
      <OutCourse />
      <Testimonials />   
      <Faqs />
    </div>
  );
}