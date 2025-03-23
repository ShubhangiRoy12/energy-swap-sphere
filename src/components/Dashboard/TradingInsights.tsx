
import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown, TrendingUp, Lightbulb, Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const TradingInsights = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mock AI insights data
  const insights = [
    {
      id: 1,
      type: "price",
      title: "Price Drop Expected",
      description: "Energy prices expected to drop by 12% in the next 24 hours due to increased solar production.",
      recommendation: "Hold purchases until tomorrow afternoon for better rates.",
      trend: "down",
      confidence: 89,
    },
    {
      id: 2,
      type: "demand",
      title: "Peak Demand Period",
      description: "Grid demand will peak between 6-8 PM today due to temperature forecasts.",
      recommendation: "Sell available energy during this window for maximum returns.",
      trend: "up",
      confidence: 92,
    },
    {
      id: 3,
      type: "weather",
      title: "High Wind Production",
      description: "Wind farms expected to produce excess energy in the next 48 hours.",
      recommendation: "Prices may decrease for wind energy. Consider buying if you need to stock up.",
      trend: "down",
      confidence: 78,
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <ArrowUp className="h-4 w-4 text-energy-green" />
    ) : (
      <ArrowDown className="h-4 w-4 text-energy-blue" />
    );
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" 
      ? "from-energy-green/20 to-energy-green/5" 
      : "from-energy-blue/20 to-energy-blue/5";
  };

  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-energy-blue-light" />
          <h3 className="text-lg font-semibold">AI Trading Insights</h3>
        </div>
        <div className="flex items-center text-xs text-foreground/70">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>Updated 5 min ago</span>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse rounded-lg bg-accent/50 p-4">
              <div className="h-4 bg-muted rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-5/6 mb-4"></div>
              <div className="flex justify-between items-center">
                <div className="h-3 bg-muted rounded w-1/4"></div>
                <div className="h-6 bg-muted rounded-full w-6"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={cn(
                "p-4 rounded-lg relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px]",
                "bg-gradient-to-br",
                getTrendColor(insight.trend)
              )}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{insight.title}</h4>
                  <div className="flex items-center text-xs px-2 py-1 rounded-full bg-background/30 backdrop-blur-sm">
                    {getTrendIcon(insight.trend)}
                    <span className="ml-1">{insight.confidence}% confidence</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 mb-3">
                  {insight.description}
                </p>
                <div className="flex items-center text-sm font-medium text-foreground/90">
                  <Lightbulb className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>{insight.recommendation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default TradingInsights;
