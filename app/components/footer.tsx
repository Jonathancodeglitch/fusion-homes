import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/fusion-logo.svg"
              alt="Fusion Senior Care Homes"
              width={200}
              height={80}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 leading-relaxed mb-4">
              Family-owned senior care homes providing exceptional,
              compassionate care across four beautiful locations in Kansas. Your
              family is our family.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a target="_blank" href="tel:+13166198837">
                  +1 (316) 619-8837
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="mailto:tmitzel.fusion@gmail.com"
                >
                  tmitzel.fusion@gmail.com
                </a>
              </div>
            </div>
            <ul className="flex items-center gap-3 mt-3">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/fusionseniorcarehomes?igsh=cHQwb2JubW5lZ20w"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/1HNkCcr86H/"
                >
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div>
                <p className="font-medium text-background">
                  Fusion Senior Care Homes I
                </p>
                <a href="https://maps.app.goo.gl/G5RJ6inWjDtvNywa7">
                  512 N Bebe St, Wichita KS 67212
                </a>
              </div>
              <div>
                <p className="font-medium text-background">
                  Fusion Senior Care Home at Mallard
                </p>
                <a href="https://maps.app.goo.gl/jbASsfNWQU8NphPTA">
                  12046 W 33rd St N, Wichita KS 67221
                </a>
              </div>
            </div>
          </div>

          {/* More Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">&nbsp;</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div>
                <p className="font-medium text-background">
                  Fusion Senior Care Home Plus II
                </p>
                <a href="https://maps.app.goo.gl/apktrDpvjUr5QHe97">
                  512 S Horseshoe Bend, Maize KS 67001
                </a>
              </div>

              <div>
                <p className="font-medium text-background">
                  Precious Gems At Polo Dr
                </p>
                <a href="https://maps.app.goo.gl/pPPDmrL3rDHaF37v6">
                  5502 E Polo Dr, Wichita KS 67217
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>
            &copy; 2024 Fusion Senior Care Homes. All rights reserved. |
            Licensed Senior Care Provider in Kansas
          </p>
        </div>
      </div>
    </footer>
  );
}
