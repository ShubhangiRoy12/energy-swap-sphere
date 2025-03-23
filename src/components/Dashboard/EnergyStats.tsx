
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, BarChart3 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";

// Define stat card data interface
interface StatCard {
  title: string;
  value: number;
  unit: string;
  change: number;
  trend: "up" | "down" | "neutral";
  color: "blue" | "green" | "orange" | "purple";
}

// Define chart data point interface
interface DataPoint {
  name: string;
  consumption: number;
  production: number;
  trading: number;
}

const EnergyStats = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for stats cards
  const stats: StatCard[] = [
    {
      title: "Energy Consumed",
      value: 1247,
      unit: "kWh",
      change: 12.5,
      trend: "up",
      color: "blue",
    },
    {
      title: "Energy Produced",
      value: 876,
      unit: "kWh",
      change: 8.3,
      trend: "up",
      color: "green",
    },
    {
      title: "Trading Volume",
      value: 543,
      unit: "kWh",
      change: 5.2,
      trend: "down",
      color: "orange",
    },
    {
      title: "Carbon Saved",
      value: 325,
      unit: "kg",
      change: 15.7,
      trend: "up",
      color: "purple",
    },
  ];

  // Mock data for chart
  const chartData: DataPoint[] = [
    { name: "Mon", consumption: 120, production: 80, trading: 40 },
    { name: "Tue", consumption: 150, production: 100, trading: 60 },
    { name: "Wed", consumption: 180, production: 120, trading: 70 },
    { name: "Thu", consumption: 160, production: 140, trading: 90 },
    { name: "Fri", consumption: 200, production: 160, trading: 120 },
    { name: "Sat", consumption: 140, production: 120, trading: 80 },
    { name: "Sun", consumption: 130, production: 100, trading: 60 },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Get color based on stat card color prop
  const getStatColor = (color: string) => {
    switch (color) {
      case "blue":
        return "from-energy-blue/20 to-energy-blue/5 text-energy-blue";
      case "green":
        return "from-energy-green/20 to-energy-green/5 text-energy-green";
      case "orange":
        return "from-orange-500/20 to-orange-500/5 text-orange-500";
      case "purple":
        return "from-purple-500/20 to-purple-500/5 text-purple-500";
      default:
        return "from-energy-blue/20 to-energy-blue/5 text-energy-blue";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <GlassCard
            key={index}
            className={cn(
              "p-5 bg-gradient-to-br",
              getStatColor(stat.color)
            )}
          >
            {isLoading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-background/30 rounded w-3/4"></div>
                <div className="h-8 bg-background/30 rounded w-1/2"></div>
                <div className="h-3 bg-background/30 rounded w-1/3"></div>
              </div>
            ) : (
              <>
                <h3 className="text-sm font-medium text-foreground/70 mb-2">{stat.title}</h3>
                <div className="text-2xl font-bold mb-1">
                  {stat.value.toLocaleString()} <span className="text-sm font-normal">{stat.unit}</span>
                </div>
                <div className="flex items-center text-xs font-medium">
                  {stat.trend === "up" ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  <span>{stat.change}% from last week</span>
                </div>
              </>
            )}
          </GlassCard>
        ))}
      </div>

      {/* Chart */}
      <GlassCard className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-energy-blue-light" />
            <h3 className="text-lg font-semibold">Energy Overview</h3>
          </div>
          <div className="flex space-x-3 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-energy-blue mr-1"></div>
              <span>Consumption</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-energy-green mr-1"></div>
              <span>Production</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
              <span>Trading</span>
            </div>
          </div>
        </div>

        <div className="h-64">
          {isLoading ? (
            <div className="animate-pulse w-full h-full bg-muted/20 rounded-lg"></div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0077B6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#0077B6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38B000" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38B000" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorTrading" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F9FAFB',
                    fontSize: '12px',
                    padding: '8px 12px',
                  }}
                  itemStyle={{ padding: 0 }}
                  labelStyle={{ color: '#F9FAFB', fontWeight: 'bold', marginBottom: '4px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="consumption" 
                  stroke="#0077B6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorConsumption)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="production" 
                  stroke="#38B000" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorProduction)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="trading" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorTrading)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export default EnergyStats;
