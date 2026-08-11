import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealEffects from "@/components/RevealEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Technology />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
      <RevealEffects />
    </>
  );
}
