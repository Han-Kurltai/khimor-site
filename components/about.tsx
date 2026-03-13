 {/* Wrapper to handle the text and spacing globally */}
<div className="[&_p]:text-justify [&_p]:leading-relaxed space-y-4">
  
  {/* About Section */}
  <section className="px-6 max-w-6xl mx-auto">
    <About />
  </section>
  </div>
export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title">About KHIMOR</h2>

        <p className="section-text">
          KHIMOR is an early-stage technology initiative exploring the frontier
          of artificial intelligence, emerging computing paradigms, and
          long-term machine intelligence research.
        </p>

        <p className="section-text">
          The name KHIMOR is inspired by the Mongolian concept of Khiimori, the “wind horse”, 
          a symbol of rising energy, momentum, and the invisible force that drives progress.
          In ancient steppe philosophy, a strong wind horse meant forward movement, clarity of purpose, 
          and the ability to overcome vast distances. We believe technological innovation plays a similar role in the modern world.
        </p>

        <p className="section-text">
          We believe meaningful breakthroughs rarely begin inside large
          institutions. They start with curious individuals willing to explore
          ideas before they become obvious.
        </p>

        <p className="section-text">
          Our goal is simple: experiment, learn quickly, and build systems that
          push the boundaries of what intelligent software can become. KHIMOR is
          currently in its early development phase, focused on research,
          experimentation, and collaboration with ambitious thinkers across
          technology and high-performance fields.
        </p>

        <p className="section-text">
          This is the beginning of a long journey. KHIMOR exists to explore,
          build, and contribute to the future of intelligent systems in every aspect of life.
        </p>
      </div>
    </section>
  );
}
