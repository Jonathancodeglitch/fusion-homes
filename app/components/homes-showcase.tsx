import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone } from "lucide-react";
import BookAppointmentForm from "./BookAppointmentForm";

const homes = [
  {
    name: "Fusion Senior Care Homes I",
    address: "512 N Bebe St, Wichita KS 67212",
    phone: "917-337-5703",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VjFLNvJfhLPjJX8JPvFgbISSQ3E7dd.png",
    description:
      "Our original location providing trusted care with a warm, family-like atmosphere for over a decade.",
  },
  {
    name: "Fusion Senior Care Home Plus II",
    address: "512 S Horseshoe Bend, Maize KS 67001",
    phone: "917-337-5703",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QTplh1uVoig2rY5JEqx7DpRYKZcZDH.png",
    description:
      "Our Maize house located in the beautiful Carriage parkway neighborhood, providing seniors in the west Wichita area the quality personalized care.",
  },
  {
    name: "Fusion Senior Care Home at Mallard",
    address: "12046 W 33rd St N, Wichita KS 67221",
    phone: "917-337-5703",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hkSajEWoJ1KE5VgGWuJAYWvmfqeieS.png",
    description:
      " Located in a quiet neighborhood, is our newest home. Has a beautiful landscape, in which seniors can enjoy at their leisure.",
  },
  {
    name: "Precious Gems At Polo Dr",
    address: "5502 E Polo Dr, Wichita KS 67217",
    phone: "917-337-5703",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RWG0HJBOAy5vIURBzmHqD2bf8E7VaZ.png",
    description:
      "individualized, attentive to each resident's unique needs, care setting with dedicated staff providing to each resident's unique needs.",
  },
];

export function HomesShowcase() {
  return (
    <section id="homes" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Our Care Home Locations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Four beautiful homes across Kansas, each providing quality care, in
            the comfort of our homes. Every location is staffed with experienced
            professionals dedicated to your loved one's wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homes.map((home, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video relative">
                <Image
                  src={home.image || "/placeholder.svg"}
                  alt={home.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3 text-balance">
                  {home.name}
                </h3>
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{home.address}</p>
                </div>
                <div className="flex items-start gap-2 mb-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{home.phone}</p>
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  {home.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <BookAppointmentForm />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
