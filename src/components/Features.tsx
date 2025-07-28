import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, 
  AlertTriangle, 
  ShoppingBag, 
  Users, 
  Calendar, 
  Star,
  MapPin,
  Coins
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Pickup Scheduling",
      description: "Schedule waste collection at your convenience. Choose date, time, and waste type.",
      benefits: ["Flexible timing", "Multiple waste types", "Reliable collectors"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: AlertTriangle,
      title: "Report Illegal Dumping",
      description: "Help keep Kenya clean by reporting illegal dump sites and earn rewards.",
      benefits: ["Photo evidence", "GPS tracking", "Reward system"],
      color: "bg-red-50 text-red-600"
    },
    {
      icon: ShoppingBag,
      title: "Compost Marketplace",
      description: "Buy premium compost manure from certified producers across Kenya.",
      benefits: ["Quality assured", "Direct from producers", "Various quantities"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Users,
      title: "Collector Network",
      description: "Connect with verified waste collectors in your area with transparent pricing.",
      benefits: ["Verified profiles", "Competitive rates", "Service reviews"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: MapPin,
      title: "Location-Based Services",
      description: "Find services tailored to your specific location across Kenya.",
      benefits: ["City-wide coverage", "Local partnerships", "Area-specific pricing"],
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Coins,
      title: "Reward System",
      description: "Earn points and rewards for contributing to environmental sustainability.",
      benefits: ["Airtime rewards", "Environmental impact", "Community recognition"],
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  const userTypes = [
    {
      title: "For Households",
      description: "Individual families and residents",
      price: "Ksh. 200-400",
      features: ["Kitchen waste pickup", "Flexible scheduling", "Affordable rates"]
    },
    {
      title: "For Businesses",
      description: "Restaurants and small businesses",
      price: "Ksh. 300-700",
      features: ["Regular collection", "Food waste handling", "Business partnerships"]
    },
    {
      title: "For Markets",
      description: "Traditional and modern markets",
      price: "Ksh. 3,000-8,000",
      features: ["Bulk collection", "Organic waste focus", "Market-wide solutions"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete Waste Management Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From pickup scheduling to compost purchasing, we've got every aspect of sustainable waste management covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing for Different User Types */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Tailored Solutions for Every Need
          </h3>
          <p className="text-lg text-muted-foreground">
            Transparent pricing designed for different user categories across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">{type.title}</CardTitle>
                <CardDescription className="text-base">{type.description}</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">{type.price}</div>
                <p className="text-sm text-muted-foreground">Starting from</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm">
                      <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};