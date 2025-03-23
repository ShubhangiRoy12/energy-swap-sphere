
import { ArrowUpRight, Wallet, Clock, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  type: "buy" | "sell";
  amount: number;
  status: "completed" | "pending";
  date: string;
  counterparty: string;
}

const EnergyWallet = () => {
  // Mock data for energy balance
  const energyBalance = 2345.8; // kWh
  const currencyBalance = 12850.75; // INR

  // Mock data for recent transactions
  const recentTransactions: Transaction[] = [
    {
      id: "tx-1",
      type: "buy",
      amount: 150,
      status: "completed",
      date: "2023-08-10T14:30:00",
      counterparty: "Solar Farm Inc.",
    },
    {
      id: "tx-2",
      type: "sell",
      amount: 75,
      status: "completed",
      date: "2023-08-09T09:15:00",
      counterparty: "Green Energy Co.",
    },
    {
      id: "tx-3",
      type: "buy",
      amount: 200,
      status: "pending",
      date: "2023-08-10T16:45:00",
      counterparty: "Wind Power Ltd.",
    },
  ];

  // Mock data for wallet usage
  const walletUsage = 65; // percentage

  // Determine progress color based on usage percentage
  const getProgressColor = () => {
    if (walletUsage < 30) return "bg-energy-green";
    if (walletUsage < 70) return "bg-energy-blue";
    return "bg-orange-500";
  };

  return (
    <GlassCard className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-semibold">Energy Wallet</h3>
        <button className="text-xs flex items-center text-energy-blue-light hover:text-energy-blue transition-colors">
          <span>View All</span>
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-accent/50 rounded-lg p-4">
          <div className="flex items-center text-foreground/70 mb-1">
            <Wallet className="h-4 w-4 mr-2" />
            <span className="text-xs">Available Energy</span>
          </div>
          <div className="text-2xl font-bold text-foreground mt-1">
            {energyBalance.toLocaleString()} <span className="text-sm font-normal text-foreground/70">kWh</span>
          </div>
        </div>

        <div className="bg-accent/50 rounded-lg p-4">
          <div className="flex items-center text-foreground/70 mb-1">
            <Wallet className="h-4 w-4 mr-2" />
            <span className="text-xs">Available Balance</span>
          </div>
          <div className="text-2xl font-bold text-foreground mt-1">
            ₹{currencyBalance.toLocaleString()} <span className="text-sm font-normal text-foreground/70">INR</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-foreground/70">Wallet Usage</span>
          <span className="text-xs font-medium">{walletUsage}%</span>
        </div>
        <Progress 
          value={walletUsage} 
          className={cn("h-1.5 bg-muted", getProgressColor())}
        />
      </div>

      <div className="flex-grow">
        <h4 className="text-sm font-medium mb-3">Recent Transactions</h4>
        <div className="space-y-3">
          {recentTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-2 rounded-lg bg-background/40 hover:bg-accent/30 transition-colors">
              <div className="flex items-center">
                <div 
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    tx.type === "buy" 
                      ? "bg-energy-blue/20 text-energy-blue" 
                      : "bg-energy-green/20 text-energy-green"
                  )}
                >
                  <ArrowUpRight 
                    className={cn(
                      "h-4 w-4",
                      tx.type === "buy" ? "" : "transform rotate-180"
                    )} 
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium line-clamp-1">
                    {tx.type === "buy" ? "Bought from" : "Sold to"} {tx.counterparty}
                  </p>
                  <div className="flex items-center text-xs text-foreground/60">
                    {tx.status === "pending" ? (
                      <Clock className="h-3 w-3 mr-1" />
                    ) : (
                      <CheckCircle2 className="h-3 w-3 mr-1 text-energy-green" />
                    )}
                    <span>
                      {tx.status === "pending" ? "Pending" : "Completed"} • {new Date(tx.date).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={cn(
                  "text-sm font-medium",
                  tx.type === "buy" ? "text-energy-blue" : "text-energy-green"
                )}>
                  {tx.type === "buy" ? "-" : "+"}{tx.amount} kWh
                </p>
                <p className="text-xs text-foreground/60">
                  ₹{(tx.amount * 5.5).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default EnergyWallet;
