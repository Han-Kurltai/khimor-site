export default function Research() {
  return (
    <section className="page-section max-w-6xl mx-auto">
      {/* mb-12 gives a massive 3-line gap after the heading */}
      <h1 className="mb-12 text-left">Research Focus</h1> 
      
      <div className="text-justify">
        {/* my-10 adds about 2.5 lines of space above and below every paragraph */}
        <p className="my-10">
          Applied AI systems: We focus on building systems that 
          solve complex problems in real-time environments.
        </p>
        
        <p className="my-10">
          Efficiency-focused models: Reducing compute costs 
          while maintaining high performance is a core pillar of our work.
        </p>
        
        <p className="my-10">
          Tooling for real-world use: Creating the bridge 
          between theoretical research and production-ready applications.
        </p>
      </div>
    </section>
  );
}