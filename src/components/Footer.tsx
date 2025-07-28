import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "How it Works", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "For Collectors", href: "#" },
      { name: "For Businesses", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "Environmental Impact", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  const counties = [
    "Nairobi", "Mombasa", "Kisumu", "Uasin Gishu", "Nakuru", "Kiambu", "Machakos", "Meru", 
    "Kakamega", "Bungoma", "Turkana", "Kilifi", "Kwale", "Garissa", "Wajir", "Mandera",
    "Marsabit", "Isiolo", "Samburu", "Trans Nzoia", "Nandi", "Baringo", "Laikipia", "Nyeri",
    "Kirinyaga", "Murang'a", "Embu", "Tharaka Nithi", "Kitui", "Makueni", "Taita Taveta",
    "Lamu", "Tana River", "Migori", "Kisii", "Nyamira", "Homa Bay", "Siaya", "Vihiga",
    "Busia", "Kericho", "Bomet", "Kajiado", "West Pokot", "Elgeyo Marakwet", "Nyandarua"
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated on Sustainable Living
            </h3>
            <p className="text-muted-foreground mb-6">
              Get tips on composting, waste reduction, and environmental sustainability delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email');
              alert(`Thank you for subscribing with ${email}! You'll receive updates on sustainable living.`);
            }}>
              <Input 
                name="email"
                type="email"
                placeholder="Enter your email address" 
                className="flex-1"
                required
              />
              <Button type="submit" className="whitespace-nowrap">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">CompostConnect</h4>
                <p className="text-xs text-muted-foreground">Smart Waste Solutions</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming waste management in Kenya through smart technology, connecting communities 
              with sustainable waste solutions and premium compost products.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Serving all major cities across Kenya</span>
              </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+254 704 199 332</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>support@compostconnect.co.ke</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Button variant="outline" size="icon" className="w-10 h-10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Platform</h5>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Support</h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Company</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h6 className="font-medium text-foreground mb-3 text-sm">Service Areas</h6>
              <div className="flex flex-wrap gap-1">
                {counties.slice(0, 6).map((county, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground"
                  >
                    {county}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">+41 more counties across Kenya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              2025 © Copyright <span className="font-semibold">CompostConnect</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <span>Supporting Kenya Vision 2030</span>
              <span>•</span>
              <span>NEMA Certified Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};