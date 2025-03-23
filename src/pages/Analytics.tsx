
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  PieChart,
  LineChart as LineChartIcon,
  Calendar,
  Zap,
  CloudSun,
  BarChart2,
  ArrowRight,
  Download,
  RefreshCw,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import { cn } from "@/lib/utils";

const Analytics = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  // Energy consumption data
  const consumptionData = [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 150 },
    { name: "Wed", value: 180 },
    { name: "Thu", value: 160 },
    { name: "Fri", value: 200 },
    { name: "Sat", value: 140 },
    { name: "Sun", value: 130 },
  ];

  // Energy source distribution
  const sourceData = [
    { name: "Solar", value: 45 },
    { name: "Wind", value: 30 },
    { name: "Hydro", value: 15 },
    { name: "Biomass", value: 10 },
  ];
  
  const COLORS = ["#F59E0B", "#0EA5E9", "#06B6D4", "#10B981"];

  // Price trends data
  const priceTrendData = [
    { date: "Aug 1", solar: 4.5, wind: 4.2, hydro: 5.1, biomass: 5.5 },
    { date: "Aug 5", solar: 4.7, wind: 4.3, hydro: 5.0, biomass: 5.4 },
    { date: "Aug 10", solar: 4.6, wind: 4.1, hydro: 5.2, biomass: 5.6 },
    { date: "Aug 15", solar: 4.3, wind: 4.0, hydro: 5.0, biomass: 5.5 },
    { date: "Aug 20", solar: 4.5, wind: 4.2, hydro: 4.9, biomass: 5.3 },
    { date: "Aug 25", solar: 4.8, wind: 4.4, hydro: 5.1, biomass: 5.5 },
    { date: "Aug 30", solar: 4.7, wind: 4.3, hydro: 5.2, biomass: 5.6 },
  ];

  // Trading volume data
  const tradingVolumeData = [
    { name: "Aug", buy: 1500, sell: 1200 },
    { name: "Sep", buy: 1800, sell: 1400 },
    { name: "Oct", buy: 1600, sell: 1300 },
    { name: "Nov", buy: 2000, sell: 1700 },
    { name: "Dec", buy: 2200, sell: 1900 },
    { name: "Jan", buy: 1900, sell: 1600 },
  ];

  // Weather impact data
  const weatherImpactData = [
    { date: "Aug 1", production: 450, solarRadiation: 85, windSpeed: 15 },
    { date: "Aug 5", production: 500, solarRadiation: 90, windSpeed: 12 },
    { date: "Aug 10", production: 480, solarRadiation: 75, windSpeed: 18 },
    { date: "Aug 15", production: 520, solarRadiation: 95, windSpeed: 10 },
    { date: "Aug 20", production: 490, solarRadiation: 80, windSpeed: 14 },
    { date: "Aug 25", production: 540, solarRadiation: 92, windSpeed: 16 },
    { date: "Aug 30", production: 510, solarRadiation: 88, windSpeed: 13 },
  ];

  // Market trend predictions
  const marketPredictions = [
    {
      id: 1,
      title: "Solar Energy Price Drop",
      prediction: "Expected 8% price reduction over the next 2 weeks",
      confidence: 85,
      impact: "high",
      trend: "down",
    },
    {
      id: 2,
      title: "Wind Energy Demand Increase",
      prediction: "15% increased trading volume forecast in coastal regions",
      confidence: 78,
      impact: "medium",
      trend: "up",
    },
    {
      id: 3,
      title: "Hydro Energy Stable Pricing",
      prediction: "Price stability expected for next 30 days",
      confidence: 92,
      impact: "low",
      trend: "stable",
    },
    {
      id: 4,
      title: "Biomass Supply Constraints",
      prediction: "Potential 5% price increase due to supply limitations",
      confidence: 73,
      impact: "medium",
      trend: "up",
    },
  ];

  // Get color based on trend
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-energy-green";
      case "down":
        return "text-energy-blue";
      case "stable":
        return "text-yellow-500";
      default:
        return "text-foreground";
    }
  };

  // Get impact badge color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-500/20 text-red-500";
      case "medium":
        return "bg-yellow-500/20 text-yellow-500";
      case "low":
        return "bg-green-500/20 text-green-500";
      default:
        return "bg-blue-500/20 text-blue-500";
    }
  };

  return (
    <>
      <Helmet>
        <title>Analytics | Energy Swap</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-energy-blue-light via-energy-blue to-energy-green">
              Energy Analytics
            </h1>
            <p className="mt-2 text-foreground/70">
              Insights and trends to optimize your energy trading strategy
            </p>
          </div>

          <div className="flex justify-between items-center mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Tabs defaultValue="weekly" onValueChange={setTimeframe} className="w-auto">
              <TabsList className="bg-background/50 border border-border/40">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Date Range</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4" />
                <span className="hidden sm:inline">Refresh</span>
              </Button>
            </div>
          </div>

          {/* Top analytics cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <GlassCard animation="fade-in" className="flex flex-col" style={{ animationDelay: '150ms' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-foreground/70">Energy Consumed</div>
                  <div className="text-2xl font-bold">1,247 kWh</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-energy-blue/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-energy-blue" />
                </div>
              </div>
              <div className="mt-auto">
                <div className="h-20">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={consumptionData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0077B6" stopOpacity={0.6} />
                          <stop offset="95%" stopColor="#0077B6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#0077B6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorConsumption)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="text-foreground/70">This week</span>
                  <span className="text-energy-green">+12.5% vs last week</span>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard animation="fade-in" className="flex flex-col" style={{ animationDelay: '200ms' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-foreground/70">Average Price</div>
                  <div className="text-2xl font-bold">₹4.65/kWh</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <BarChart2 className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <div className="mt-auto">
                <div className="h-20">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceTrendData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Line
                        type="monotone"
                        dataKey="solar"
                        stroke="#F59E0B"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="wind"
                        stroke="#0EA5E9"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="text-foreground/70">Market average</span>
                  <span className="text-energy-blue">-3.2% vs last month</span>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard animation="fade-in" className="flex flex-col" style={{ animationDelay: '250ms' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-foreground/70">Energy Sources</div>
                  <div className="text-2xl font-bold">4 Types</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <PieChart className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <div className="mt-auto">
                <div className="h-20 flex justify-center">
                  <ResponsiveContainer width="60%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={sourceData}
                        innerRadius={15}
                        outerRadius={30}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="text-foreground/70">Distribution</span>
                  <span className="text-energy-green">Diverse portfolio</span>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard animation="fade-in" className="flex flex-col" style={{ animationDelay: '300ms' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-foreground/70">Weather Impact</div>
                  <div className="text-2xl font-bold">High</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <CloudSun className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
              <div className="mt-auto">
                <div className="h-20">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weatherImpactData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Line
                        type="monotone"
                        dataKey="solarRadiation"
                        stroke="#F59E0B"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="windSpeed"
                        stroke="#0EA5E9"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="text-foreground/70">Solar & Wind</span>
                  <span className="text-yellow-500">+18% production forecast</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Main analytics components */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Price Trends */}
            <GlassCard className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <LineChartIcon className="h-5 w-5 mr-2 text-energy-blue-light" />
                  <h3 className="text-lg font-semibold">Price Trends by Energy Type</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-energy-blue-light hover:text-energy-blue hover:bg-background/40">
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={priceTrendData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" tick={{ fill: '#94A3B8' }} />
                    <YAxis tick={{ fill: '#94A3B8' }} />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F9FAFB',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="solar"
                      name="Solar"
                      stroke="#F59E0B"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="wind"
                      name="Wind"
                      stroke="#0EA5E9"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="hydro"
                      name="Hydro"
                      stroke="#06B6D4"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="biomass"
                      name="Biomass"
                      stroke="#10B981"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
            
            {/* Energy Source Distribution */}
            <GlassCard className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-energy-blue-light" />
                  <h3 className="text-lg font-semibold">Energy Sources</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-energy-blue-light hover:text-energy-blue hover:bg-background/40">
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F9FAFB',
                      }}
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                {sourceData.map((source, index) => (
                  <div key={source.name} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-sm">{source.name}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Additional analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Trading Volume Analysis */}
            <GlassCard className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-energy-blue-light" />
                  <h3 className="text-lg font-semibold">Trading Volume Analysis</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-energy-blue-light hover:text-energy-blue hover:bg-background/40">
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={tradingVolumeData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" tick={{ fill: '#94A3B8' }} />
                    <YAxis tick={{ fill: '#94A3B8' }} />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F9FAFB',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="buy" name="Buy Volume (kWh)" fill="#0077B6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="sell" name="Sell Volume (kWh)" fill="#38B000" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
            
            {/* AI Market Predictions */}
            <GlassCard className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center mb-6">
                <BarChart2 className="h-5 w-5 mr-2 text-energy-blue-light" />
                <h3 className="text-lg font-semibold">AI Market Predictions</h3>
              </div>
              
              <div className="space-y-4">
                {marketPredictions.map((prediction) => (
                  <div
                    key={prediction.id}
                    className="p-3 rounded-lg bg-background/40 hover:bg-accent/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{prediction.title}</h4>
                      <div
                        className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          getImpactColor(prediction.impact)
                        )}
                      >
                        {prediction.impact} impact
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 mb-2">{prediction.prediction}</p>
                    <div className="flex justify-between items-center text-xs">
                      <div className={cn("font-medium", getTrendColor(prediction.trend))}>
                        Trend: {prediction.trend}
                      </div>
                      <div>Confidence: {prediction.confidence}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Analytics;
