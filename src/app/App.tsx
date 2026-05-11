import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-[#f5f5f0]">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </div>
  );
}
