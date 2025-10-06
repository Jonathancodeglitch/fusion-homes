"use client";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

export default function BookAppointmentForm() {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("loading");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/9c85a5da450722e6a0767c21463e3621",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ formOrigin: "Scheduling a tour", ...data }),
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
          Schedule Tour
        </Button>
      </DialogTrigger>

      <DialogContent showCloseButton={false}>
        <DialogClose
          data-slot="dialog-close"
          className="cursor-pointer ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogTitle>Schedule a Tour Today</DialogTitle>
        <DialogDescription size="2" mb="4">
          Come see our senior care home in person. Experience the warm
          environment, meet our caring staff, and discover how we make every
          resident feel at home.
        </DialogDescription>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              className="my-2"
              {...register("fullName", { required: true })}
              id="fullName"
              placeholder="Your Full Name"
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName?.type === "required" && (
              <p className="text-red-400 font-bold text-sm" role="alert">
                Full Name is required
              </p>
            )}
          </div>
          <div className=" mt-5">
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              className="my-2"
              {...register("phoneNumber", { required: true })}
              id="phone Number"
              placeholder="Enter your phone number"
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />
            {errors.phoneNumber?.type === "required" && (
              <p className="text-red-400 font-bold text-sm" role="alert">
                Phone Number is required
              </p>
            )}
          </div>

          <div className="flex items-center gap-1  mt-5">
            <div className="flex-1">
              <Label htmlFor="date">Pick a date *</Label>
              <Input
                className="my-2"
                {...register("date", { required: true })}
                type="date"
                id="date"
                placeholder="Enter your phone number"
                aria-invalid={errors.date ? "true" : "false"}
              />
              {errors.date?.type === "required" && (
                <p className="text-red-400 font-bold text-sm" role="alert">
                  Date is required
                </p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="time">Pick a Time *</Label>
              <Input
                className="my-2"
                {...register("time", { required: true })}
                type="time"
                id="time"
                placeholder="Enter your phone number"
                aria-invalid={errors.time ? "true" : "false"}
              />
              {errors.time?.type === "required" && (
                <p className="text-red-400 font-bold text-sm" role="alert">
                  Time is required
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full  items-center justify-center mt-5">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
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
          </div>

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
      </DialogContent>
    </Dialog>
  );
}
