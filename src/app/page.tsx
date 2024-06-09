import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicWebTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebnars from "@/components/UpcomingWebnars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-3xl text-center bg-orange-600 m-0">Hello World</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicWebTestimonialCards />
      <UpcomingWebnars />
      <Instructors />
      <Footer />
    </main>
  );
}
