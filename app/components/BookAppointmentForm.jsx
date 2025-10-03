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

export default function BookAppointmentForm() {
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

        <form action="">
          <div className="mt-5">
            <Label htmlFor="lastName">Full Name *</Label>
            <Input
              className="mt-1"
              id="Full Name"
              placeholder="Your last name"
              required
            />
          </div>
          <div className=" mt-5">
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              className="mt-1"
              id="phone Number"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex items-center gap-1  mt-5">
            <div className="flex-1">
              <Label htmlFor="phoneNumber">Pick a date *</Label>
              <Input
                type="date"
                className="mt-1"
                id="phone Number"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="phoneNumber">Pick a Time *</Label>
              <Input
                type="time"
                id="phone Number"
                className="mt-1"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="flex w-full  items-center justify-center mt-5">
            <Button className="w-[80%] cursor-pointer  bg-primary text-primary-foreground hover:bg-primary/90">
              Send
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
