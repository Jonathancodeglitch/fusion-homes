import Image from "next/image";
import { Button } from "./ui/button";

export function About() {
  return (
    <section id="about" className="py-16 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
              Our Family History
            </h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-lg">
                Fusion Senior Care Homes is a family-owned business serving
                Kansas communities. We have years of experience helping
                residents transition into our homes for their physical,
                emotional, and social needs.
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
                We are here for you.
              </h2>
              <p>
                We strive to make the process of transitioning your loved one
                into their new environment as stress-free as possible. With our
                experienced and well-trained staff, we will help you every step
                of the way.
              </p>
              <p>
                The Fusion team is committed to your family having peace of mind
                while in our care. At Fusion Senior Care Homes, your family is
                our family.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[6/5] relative rounded-lg overflow-hidden bg-secondary/10 ">
              <Image
                src="/family-photo.jpg"
                alt="Fusion Senior Care Homes family owners with their pets"
                fill
                className="object-cover object-top sm:object-contain sm:object-center"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
