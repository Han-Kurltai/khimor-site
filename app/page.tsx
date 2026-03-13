// app/page.tsx
import Hero from "../components/hero";
import Mission from "../components/mission";
import About from "../components/about";
import Research from "../components/research";
import Team from "../components/team";
import Updates from "../components/updates";
import Donate from "../components/donate";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className="bg-[#212121] text-white scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <img src="/Logo.png" alt="Nexus Logo" width={700} height={200} className="w-500 mb-500" />
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4">KHIMOR</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl">
          Artificial Intelligence · Emerging Computing · Research
        </p>
        <a href="#donate" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-semibold text-lg hover:scale-105 transition-transform">
          Support Us
        </a>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <p className="text-lg font-light leading-relaxed">
          At KHIMOR, we experiment and innovate with AI, computing paradigms, and AGI research. Our goal is to push boundaries and support ambitious talent across fields.
        </p>
      </section>

     <div className="flex flex-col items-stretch w-full">
  
  {/* Each section now forces its internal text to justify and caps the gap */}
  <section className="py-4 px-6 max-w-6xl mx-auto w-full text-justify [text-align-last:center]">
    <About />
  </section>

  <section className="py-4 px-6 max-w-6xl mx-auto w-full text-justify [text-align-last:center]">
    <Research />
  </section>

  <section className="py-4 px-6 max-w-6xl mx-auto w-full text-justify [text-align-last:center]">
    <Team />
  </section>

  <section className="py-4 px-6 max-w-6xl mx-auto w-full text-justify [text-align-last:center]">
    <Updates />
  </section>

</div>
      {/* Donate Section */}
      <section id="donate" className="py-16 px-6 text-center max-w-4xl mx-auto">
        <Donate />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center max-w-4xl mx-auto">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 border-t border-gray-700">
        <p className="section-text"></p>
        © {new Date().getFullYear()} KHIMOR Corporation — All Rights Reserved
         <p className="section-text">
          Website still under development
         </p>
      </footer>
    </main>
  );
}