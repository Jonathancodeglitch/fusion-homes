import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HomesShowcase } from "./components/homes-showcase";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import FAQSection from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HomesShowcase />
      <Services />
      <About />
      <Contact />
      <FAQSection />
      <Footer />
    </main>
  );
}
