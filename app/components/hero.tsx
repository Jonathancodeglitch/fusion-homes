import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          filter: "blur(1px)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          QUALITY SENIOR CARE FOR YOUR LOVED ONES
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
          Fusion Senior Care Home Plus provides long term and respite care for
          seniors and people with physical disabilities in Wichita, Kansas. Our
          home-like settings and optimal staff-to-resident ratio makes it
          possible for us to provide quality, individualized care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
          >
            <Link href="#homes">Find a location for your loved one</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
