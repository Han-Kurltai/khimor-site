import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/logo.png"
        alt="Nexus Logo"
        width={1200}
        height={1200}
        priority
      />

      <p className="hero-tagline">
        Artificial Intelligence · Emerging Computing · Research
      </p>
    </section>
  );
}