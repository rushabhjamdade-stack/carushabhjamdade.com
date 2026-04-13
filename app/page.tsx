import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/sections/Hero";
import CredibilityBar from "@/components/sections/CredibilityBar";
import StatsBar from "@/components/sections/StatsBar";
import WhatIDo from "@/components/sections/WhatIDo";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FeaturedContent from "@/components/sections/FeaturedContent";
import LinkedInFeed from "@/components/sections/LinkedInFeed";
import Resources from "@/components/sections/Resources";
import BookACall from "@/components/sections/BookACall";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";
import AvatarBuddy from "@/components/avatar/AvatarBuddy";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <StatsBar />
        <WhatIDo />
        <Products />
        <Testimonials />
        <About />
        <FeaturedContent />
        <LinkedInFeed />
        <Resources />
        <BookACall />
        <Newsletter />
      </main>
      <Footer />
      <AvatarBuddy />
    </>
  );
}
