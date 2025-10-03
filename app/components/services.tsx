import Image from "next/image";

export function Services() {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Committed to Quality Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            You can expect the best care for your loved one at Fusion Senior
            Care Homes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/personal-care-service.jpeg"
              alt="Compassionate care at Fusion Senior Care Homes"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground text-balance">
              24/7 Compassionate Care
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our certified Nursing Assistants and Medication Aids are on site
              around the clock, with registered nurses on call 24/7. We provide
              specialized care for residents with dementia, memory issues, and
              other progressive medical conditions, ensuring your loved ones
              receive the attention they deserve.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Certified nursing staff available 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Specialized memory and dementia care</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Medication management and monitoring</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:order-1">
            <h3 className="text-3xl font-bold text-foreground text-balance">
              Home-Like Environment & Medical Services
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in creating a true home environment with all the
              medical and activity of daily living support your loved ones need.
              From home-cooked meals and housekeeping to on-site medical
              services including podiatry, labs, and x-rays, we handle
              everything so families can focus on what matters most - spending
              quality time together.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Home-cooked meals and laundry services</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>On-site medical services and house calls</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Personalized care plans for each resident</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Activities: games, movie nights, gardening, cocktails
                  evenings, etc
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden lg:order-2">
            <Image
              src="/dining-room-community.jpg"
              alt="Home-like environment at Fusion Senior Care"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
