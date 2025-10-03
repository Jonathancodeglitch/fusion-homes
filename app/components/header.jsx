import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import BookAppointmentForm from "./BookAppointmentForm";

export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4b mr-[40px]">
          <Image
            src="/fusion-logo.svg"
            alt="Fusion Senior Care Homes"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#homes"
            className="text-foreground hover:text-primary transition-colors"
          >
            Our Homes
          </Link>
          <Link
            href="#services"
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <BookAppointmentForm />
      </div>
    </header>
  );
}
