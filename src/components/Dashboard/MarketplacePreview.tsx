
import { useEffect, useState } from "react";
import { ArrowRight, Tag, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface EnergyListing {
  id: string;
  provider: string;
  energyType: "solar" | "wind" | "hydro" | "biomass";
  amount: number;
  price: number;
  location: string;
  timeLeft: string;
}

const MarketplacePreview = () => {
  const [listings, setListings] = useState<EnergyListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data
  const mockListings: EnergyListing[] = [
    {
      id: "list-1",
      provider: "SunPower Solutions",
      energyType: "solar",
      amount: 500,
      price: 4.75,
      location: "Maharashtra",
      timeLeft: "2 hours",
    },
    {
      id: "list-2",
      provider: "WindTech Energy",
      energyType: "wind",
      amount: 750,
      price: 4.25,
      location: "Gujarat",
      timeLeft: "5 hours",
    },
    {
      id: "list-3",
      provider: "HydroElectric Corp",
      energyType: "hydro",
      amount: 1000,
      price: 5.10,
      location: "Karnataka",
      timeLeft: "1 day",
    },
    {
      id: "list-4",
      provider: "BioPower Industries",
      energyType: "biomass",
      amount: 300,
      price: 5.50,
      location: "Punjab",
      timeLeft: "4 hours",
    },
  ];

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Get color based on energy type
  const getEnergyTypeColor = (type: string) => {
    switch (type) {
      case "solar":
        return "bg-yellow-500/20 text-yellow-500";
      case "wind":
        return "bg-blue-500/20 text-blue-500";
      case "hydro":
        return "bg-cyan-500/20 text-cyan-500";
      case "biomass":
        return "bg-green-500/20 text-green-500";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Tag className="h-5 w-5 mr-2 text-energy-blue-light" />
          <h3 className="text-lg font-semibold">Market Listings</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-energy-blue-light hover:text-energy-blue hover:bg-background/40">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse p-4 rounded-lg bg-accent/30">
              <div className="flex justify-between mb-3">
                <div className="h-5 bg-muted rounded w-1/3"></div>
                <div className="h-5 bg-muted rounded w-20"></div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="h-4 bg-muted rounded w-24 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-32"></div>
                </div>
                <div className="h-8 bg-muted rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {listings.map((listing) => (
            <div 
              key={listing.id} 
              className="group p-4 rounded-lg bg-background/40 hover:bg-accent/30 transition-all duration-200 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div 
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                      getEnergyTypeColor(listing.energyType)
                    )}
                  >
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium line-clamp-1">{listing.provider}</h4>
                    <div className="flex items-center text-xs text-foreground/60">
                      <span className="capitalize">{listing.energyType}</span>
                      <span className="mx-1">•</span>
                      <span>{listing.location}</span>
                    </div>
                  </div>
                </div>
                <div className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  "bg-background/70 text-foreground/70",
                )}>
                  {listing.timeLeft} left
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold">
                    {listing.amount.toLocaleString()} <span className="text-sm text-foreground/70">kWh</span>
                  </div>
                  <div className="text-sm text-foreground/70">
                    ₹{listing.price.toFixed(2)}/kWh
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-energy-blue hover:bg-energy-blue/90"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default MarketplacePreview;
