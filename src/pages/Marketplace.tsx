
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Search, Filter, Zap, ArrowUpDown, ChevronDown, Gauge } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface EnergyListing {
  id: string;
  provider: string;
  energyType: "solar" | "wind" | "hydro" | "biomass";
  amount: number;
  price: number;
  location: string;
  timeLeft: string;
  rating: number;
  distance: number;
}

const Marketplace = () => {
  const [priceRange, setPriceRange] = useState([3, 7]);
  const [sortOption, setSortOption] = useState("price-low");

  // Mock listings data
  const listings: EnergyListing[] = [
    {
      id: "list-1",
      provider: "SunPower Solutions",
      energyType: "solar",
      amount: 500,
      price: 4.75,
      location: "Maharashtra",
      timeLeft: "2 hours",
      rating: 4.8,
      distance: 25,
    },
    {
      id: "list-2",
      provider: "WindTech Energy",
      energyType: "wind",
      amount: 750,
      price: 4.25,
      location: "Gujarat",
      timeLeft: "5 hours",
      rating: 4.6,
      distance: 120,
    },
    {
      id: "list-3",
      provider: "HydroElectric Corp",
      energyType: "hydro",
      amount: 1000,
      price: 5.10,
      location: "Karnataka",
      timeLeft: "1 day",
      rating: 4.9,
      distance: 85,
    },
    {
      id: "list-4",
      provider: "BioPower Industries",
      energyType: "biomass",
      amount: 300,
      price: 5.50,
      location: "Punjab",
      timeLeft: "4 hours",
      rating: 4.5,
      distance: 150,
    },
    {
      id: "list-5",
      provider: "GreenSolar India",
      energyType: "solar",
      amount: 850,
      price: 4.80,
      location: "Tamil Nadu",
      timeLeft: "8 hours",
      rating: 4.7,
      distance: 180,
    },
    {
      id: "list-6",
      provider: "WindFarm Collective",
      energyType: "wind",
      amount: 620,
      price: 4.35,
      location: "Rajasthan",
      timeLeft: "3 hours",
      rating: 4.4,
      distance: 95,
    },
    {
      id: "list-7",
      provider: "Riverside Energy",
      energyType: "hydro",
      amount: 450,
      price: 4.90,
      location: "Himachal",
      timeLeft: "6 hours",
      rating: 4.8,
      distance: 210,
    },
    {
      id: "list-8",
      provider: "AgroEnergy Solutions",
      energyType: "biomass",
      amount: 380,
      price: 5.25,
      location: "Uttar Pradesh",
      timeLeft: "12 hours",
      rating: 4.3,
      distance: 75,
    },
  ];

  // Get color based on energy type
  const getEnergyTypeColor = (type: string) => {
    switch (type) {
      case "solar":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "wind":
        return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      case "hydro":
        return "bg-cyan-500/20 text-cyan-500 border-cyan-500/30";
      case "biomass":
        return "bg-green-500/20 text-green-500 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };

  return (
    <>
      <Helmet>
        <title>Marketplace | Energy Swap</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-energy-blue-light via-energy-blue to-energy-green">
              Energy Marketplace
            </h1>
            <p className="mt-2 text-foreground/70">
              Buy and sell renewable energy directly from verified providers
            </p>
          </div>

          {/* Search and Filters */}
          <GlassCard className="mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
                <Input 
                  placeholder="Search by provider, location, or energy type..." 
                  className="pl-10 bg-background/40 border-border/50 focus-visible:ring-energy-blue"
                />
              </div>
              
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>Filters</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72">
                    <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    
                    <div className="p-3 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Energy Type</label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="justify-start">
                            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                            Solar
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                            Wind
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            <span className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></span>
                            Hydro
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                            Biomass
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Price Range (₹/kWh)</label>
                          <span className="text-xs text-foreground/70">
                            ₹{priceRange[0]} - ₹{priceRange[1]}
                          </span>
                        </div>
                        <Slider 
                          defaultValue={priceRange} 
                          min={1} 
                          max={10} 
                          step={0.5}
                          onValueChange={(values) => setPriceRange(values)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Location</label>
                        <Input placeholder="Any location..." />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Minimum Rating</label>
                        <div className="flex space-x-2">
                          {[4, 4.2, 4.5, 4.8].map((rating) => (
                            <Button key={rating} variant="outline" size="sm">
                              {rating}+
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2 flex justify-between">
                        <Button variant="outline" size="sm">Reset</Button>
                        <Button size="sm">Apply Filters</Button>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      <span>Sort</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setSortOption("price-low")}>
                      Price: Low to High
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("price-high")}>
                      Price: High to Low
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("amount")}>
                      Energy Amount
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("rating")}>
                      Provider Rating
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption("distance")}>
                      Distance
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </GlassCard>

          {/* Energy Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing, index) => (
              <GlassCard 
                key={listing.id} 
                className="flex flex-col h-full animate-fade-in-up hover:translate-y-[-2px] transition-transform duration-300"
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-3">
                    <div 
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        getEnergyTypeColor(listing.energyType)
                      )}
                    >
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{listing.provider}</h3>
                      <div className="flex items-center text-xs text-foreground/60 mt-1">
                        <span className="capitalize">{listing.energyType}</span>
                        <span className="mx-1">•</span>
                        <span>{listing.location}</span>
                        <span className="mx-1">•</span>
                        <span>{listing.distance} km</span>
                      </div>
                    </div>
                  </div>
                  <div className={cn(
                    "text-xs px-2 py-1 rounded-full border",
                    "bg-background/70 text-foreground/70 border-border/50",
                  )}>
                    {listing.timeLeft} left
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xl font-semibold">
                      {listing.amount.toLocaleString()} <span className="text-sm text-foreground/70">kWh</span>
                    </div>
                    <div className="flex items-center bg-accent/50 px-2 py-1 rounded-lg">
                      <Gauge className="h-3 w-3 mr-1 text-energy-blue-light" />
                      <span className="text-xs font-medium">{listing.rating}/5</span>
                    </div>
                  </div>
                  
                  <div className="text-lg font-medium text-energy-blue mb-4">
                    ₹{listing.price.toFixed(2)}/kWh
                  </div>
                  
                  <div className="text-xs text-foreground/60 mb-4">
                    Total Value: ₹{(listing.price * listing.amount).toLocaleString()}
                  </div>
                  
                  <div className="mt-auto space-x-2">
                    <Button 
                      className="w-full bg-energy-blue hover:bg-energy-blue/90 text-white"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Marketplace;
