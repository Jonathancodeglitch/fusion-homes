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
                Fusion Senior Care Home Plus is based in Wichita, Kansas. We are
                a family-owned company established in 2016. Owner/operator
                Syreeta Chenneh-Dweh was inspired to open our first home by the
                compassionate, resourceful nurse who cared for her dying mother.
                Through sacrifice and excellence, our first two residents
                experienced improvement in their quality of life. As the word
                spread, the founders soon had a full house and eventually a
                waiting list.
              </p>

              <p>
                Starting from that first home at 512 N. Bebe, we now have a
                portfolio of 4 home plus locations. We plan to open more homes
                to serve Wichita’s growing senior population.
              </p>
              <p>
                Wichita families have trusted us to care for their loved ones
                for almost a decade because of our unwavering commitment to
                quality care and our wealth of experience.
              </p>
              <p>
                If you are looking for assisted living within the comfort of a
                home, we are here to help you.{" "}
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
