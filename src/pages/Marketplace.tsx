import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Leaf, Package, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Marketplace() {
  const [cart, setCart] = useState<any[]>([]);

  const compostProducts = [
    {
      id: 1,
      name: "Premium Organic Compost",
      handler: "Green Valley Composting",
      image: "/api/placeholder/300/200",
      pricing: [
        { size: "1 kg", price: 200 },
        { size: "Wheelbarrow", price: 1500 },
        { size: "Pickup truck", price: 3500 },
        { size: "Lorry", price: 7000 }
      ],
      location: "Nairobi",
      rating: 4.8,
      description: "High-quality organic compost made from kitchen and market waste"
    },
    {
      id: 2,
      name: "Market Waste Compost",
      handler: "Kisumu Organic Solutions",
      image: "/api/placeholder/300/200",
      pricing: [
        { size: "1 kg", price: 180 },
        { size: "Wheelbarrow", price: 1300 },
        { size: "Pickup truck", price: 3200 },
        { size: "Lorry", price: 6500 }
      ],
      location: "Kisumu",
      rating: 4.6,
      description: "Nutrient-rich compost from vegetable and fruit market waste"
    },
    {
      id: 3,
      name: "Restaurant Grade Compost",
      handler: "Mombasa Waste Solutions",
      image: "/api/placeholder/300/200",
      pricing: [
        { size: "1 kg", price: 220 },
        { size: "Wheelbarrow", price: 1600 },
        { size: "Pickup truck", price: 3800 },
        { size: "Lorry", price: 7500 }
      ],
      location: "Mombasa",
      rating: 4.9,
      description: "Premium compost processed from restaurant organic waste"
    }
  ];

  const addToCart = (product: any, size: any) => {
    const cartItem = {
      id: `${product.id}-${size.size}`,
      productId: product.id,
      name: product.name,
      handler: product.handler,
      size: size.size,
      price: size.price,
      quantity: 1
    };
    setCart(prev => [...prev, cartItem]);
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Compost Marketplace</h1>
          <p className="text-muted-foreground">
            Buy premium organic compost from certified handlers across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compostProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Package className="w-16 h-16 text-primary" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.handler}</CardDescription>
                      </div>
                      <Badge variant="secondary">{product.location}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.pricing.map((option, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Truck className="w-4 h-4 text-primary" />
                            <span className="font-medium">{option.size}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">Ksh {option.price.toLocaleString()}</span>
                            <Button 
                              size="sm" 
                              onClick={() => addToCart(product, option)}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Shopping Cart</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.size}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">Ksh {item.price.toLocaleString()}</p>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-lg">Ksh {getTotalPrice().toLocaleString()}</span>
                      </div>
                      <Button className="w-full">
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}