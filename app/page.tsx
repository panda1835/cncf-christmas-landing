import Hero from "../components/Hero";
import Letter from "../components/OurStory";
import JoinUs from "../components/JoinUs";
import CTA from "../components/CTA";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="">
      <main>
        <Hero />
        <Letter />
        <JoinUs />
        <CTA />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
