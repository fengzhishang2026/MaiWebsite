import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealEffects from "@/components/RevealEffects";
import { getDictionary } from "./dictionaries";

export default async function Home() {
  const dict = await getDictionary();

  return (
    <>
      <main>
        <Hero dict={dict.hero} />
        <Products dict={dict.products} />
        <Technology dict={dict.technology} />
        <WhyUs dict={dict.whyUs} />
        <CTA dict={dict.cta} />
      </main>
      <Footer dict={dict.footer} />
      <RevealEffects />
    </>
  );
}
