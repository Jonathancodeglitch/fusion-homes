import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Contact Fusion Senior Care Homes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            The sooner you contact us, the sooner we can help you find solutions
            to your senior care needs. We will walk you through the approval
            process with medical and financial consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image on the left */}
          <div className="relative">
            <Image
              src="/birthday-celebration.jpeg"
              alt="Resident celebrating with joy at our care home - wearing party hat and novelty glasses"
              width={600}
              height={600}
              className="w-full h-[600px] object-cover object-center rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>

          {/* Get in Touch form as square grid on the right */}
          <Card className="h-fit">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(316) 555-0123"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="inquiry">What would you like to do?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tour">Schedule a Home Tour</SelectItem>
                      <SelectItem value="appointment">
                        Book an Appointment
                      </SelectItem>
                      <SelectItem value="medicaid">
                        Discuss Medicaid Assistance
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs and how we can help..."
                    rows={3}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Call Us
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Ready to help you today
              </p>
              <p className="text-xl font-bold text-primary">917-337-5703</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Email Us
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                We'll respond within 24 hours
              </p>
              <p className="text-sm text-foreground">
                fusionseniorcarehome@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Office Hours
              </h4>

              <div className="space-y-1 text-xs text-foreground">
                <p>Mon-Fri: 9am-5pm</p>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Home Visiting Hours
                </h4>
                <p>Sunday to Saturday: 8am to 8pm</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Service Areas
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Serving Kansas communities
              </p>
              <div className="space-y-1 text-xs text-foreground">
                <p>Wichita, KS</p>
                <p>Maize, KS</p>
                <p>Surrounding areas</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
