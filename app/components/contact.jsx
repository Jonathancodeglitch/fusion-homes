"use client";
import { useState, useEffect } from "react";
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
import { useForm, Controller } from "react-hook-form";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    inquiry: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("loading");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/tmitzel.fusion@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ formOrigin: "Contact Form", ...data }),
        }
      );

      const responseData = await res.json();
      if (responseData.success === "true") {
        reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  // ✅ Hide success message after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      className="my-2"
                      {...register("firstName", { required: true })}
                      id="firstName"
                      placeholder="Your first name"
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === "required" && (
                      <p
                        className="text-red-400 font-bold text-sm"
                        role="alert"
                      >
                        First Name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      className="my-2"
                      {...register("lastName", { required: true })}
                      id="lastName"
                      placeholder="Your last name"
                      aria-invalid={errors.lastName ? "true" : "false"}
                    />
                    {errors.lastName?.type === "required" && (
                      <p
                        className="text-red-400 font-bold text-sm"
                        role="alert"
                      >
                        Last Name is required
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    className="my-2"
                    {...register("phone", { required: true })}
                    id="phone"
                    type="tel"
                    placeholder="(316) 555-0123"
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone?.type === "required" && (
                    <p className="text-red-400 font-bold text-sm" role="alert">
                      Phone Number is required
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    className="my-2"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="text-red-400 font-bold text-sm" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="inquiry">What would you like to do?</Label>
                  <Controller
                    name="inquiry"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tour">
                            Schedule a Home Tour
                          </SelectItem>
                          <SelectItem value="appointment">
                            Book an Appointment
                          </SelectItem>
                          <SelectItem value="medicaid">
                            Discuss Medicaid Assistance
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    className="my-2"
                    {...register("message", { required: true })}
                    id="message"
                    placeholder="Tell us about your needs and how we can help..."
                    rows={3}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message?.type === "required" && (
                    <p className="text-red-400 font-bold text-sm" role="alert">
                      Message is required
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="cursor-pointer  w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {status === "success" && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center">
                    Something went wrong. Try again.
                  </p>
                )}
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
              <a
                target="_blank"
                href="tel:+13166198837"
                className="text-xl font-bold text-primary"
              >
                +1 (316) 619-8837
              </a>
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
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:tmitzel.fusion@gmail.com"
                className="text-sm text-foreground"
              >
                tmitzel.fusion@gmail.com
              </a>
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
