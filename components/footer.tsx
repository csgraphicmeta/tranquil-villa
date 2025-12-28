import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            {/* <h3 className="font-serif text-2xl text-primary mb-4">THE TRANQUIL</h3> */}
            <img
              src="/logo-tranquil.png"
              alt="The Tranquil Logo"
              width={150}
              height={50}
              className="object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              An award-winning luxury villa and architectural masterpiece in Makola, Sri Lanka.
            </p>
          </div>

          <div>
            <h4 className="text-lg text-muted-foreground font-semibold tracking-wider mb-4">QUICK LINKS</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/facilities" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Facilities
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="">
            <h4 className="text-lg text-muted-foreground font-semibold tracking-wider mb-4">CONNECT WITH US</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/share/16ejxAi5QT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/16ejxAi5QT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@TheTranquil-d1c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@the_tranquils?_t=ZS-90Cb1xJS9g8&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c0 .4 0 .7 0 1.1 0 2.1 1.7 3.9 3.8 3.9.4 0 .7 0 1.1 0v2.2c-.6 0-1.2-.1-1.8-.2v5.6c0 3-2.2 5.7-5.2 6-3.2.3-6-2-6.4-5.1-.3-2.9 1.5-5.4 4.2-6.2.5-.1 1-.2 1.5-.2v2.3c-.3 0-.6 0-.8.1-1.1.3-1.9 1.3-1.9 2.5.1 1.3 1.2 2.4 2.5 2.3 1.2-.1 2.2-1.1 2.2-2.3V2h2.3z" />
                </svg>
              </a>

            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">info@thetranquils.com</p>
              <p className="text-sm text-muted-foreground">+94 11 2 965 888</p>
              <p className="text-sm text-muted-foreground">+94 77 5 072 909</p>
              <p className="text-sm text-muted-foreground">No: 194 / 1 , Makola South, Makola, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} THE TRANQUILS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
