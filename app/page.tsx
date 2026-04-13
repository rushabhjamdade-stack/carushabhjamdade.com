import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CredibilityBar from "@/components/sections/CredibilityBar";
import WhatIDo from "@/components/sections/WhatIDo";
import StatsBar from "@/components/sections/StatsBar";
import Products from "@/components/sections/Products";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import FeaturedContent from "@/components/sections/FeaturedContent";
import LinkedInFeed from "@/components/sections/LinkedInFeed";
import Resources from "@/components/sections/Resources";
import BookACall from "@/components/sections/BookACall";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";
import FloatingPill from "@/components/shared/FloatingPill";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <WhatIDo />
        <StatsBar />
        <Products />
        <TechStack />
        <About />
        <FeaturedContent />
        <LinkedInFeed />
        <Resources />
        <BookACall />
        <Newsletter />
      </main>
      <Footer />
      <FloatingPill />
    </>
  );
}
