
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet as WalletIcon, 
  CreditCard, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2,
  ArrowDown,
  Download,
  Upload,
  RefreshCw,
  PlusCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  type: "buy" | "sell" | "deposit" | "withdraw";
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
  counterparty: string;
  details?: string;
}

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for energy balance
  const energyBalance = 2345.8; // kWh
  const currencyBalance = 12850.75; // INR
  const pendingBalance = 450.25; // INR in pending transactions
  const worthValue = 48720.53; // INR (estimated worth of energy)

  // Mock data for transactions
  const transactions: Transaction[] = [
    {
      id: "tx-001",
      type: "buy",
      amount: 150,
      status: "completed",
      date: "2023-08-10T14:30:00",
      counterparty: "Solar Farm Inc.",
    },
    {
      id: "tx-002",
      type: "sell",
      amount: 75,
      status: "completed",
      date: "2023-08-09T09:15:00",
      counterparty: "Green Energy Co.",
    },
    {
      id: "tx-003",
      type: "deposit",
      amount: 5000,
      status: "completed",
      date: "2023-08-08T11:22:00",
      counterparty: "Bank Transfer",
      details: "HDFC Bank ****1234",
    },
    {
      id: "tx-004",
      type: "buy",
      amount: 200,
      status: "pending",
      date: "2023-08-10T16:45:00",
      counterparty: "Wind Power Ltd.",
    },
    {
      id: "tx-005",
      type: "withdraw",
      amount: 2500,
      status: "completed",
      date: "2023-08-05T13:12:00",
      counterparty: "Bank Transfer",
      details: "ICICI Bank ****5678",
    },
    {
      id: "tx-006",
      type: "sell",
      amount: 120,
      status: "failed",
      date: "2023-08-03T10:30:00",
      counterparty: "Energy Grid Corp.",
      details: "Transaction timeout",
    },
    {
      id: "tx-007",
      type: "buy",
      amount: 85,
      status: "completed",
      date: "2023-08-02T15:48:00",
      counterparty: "Hydro Solutions",
    },
    {
      id: "tx-008",
      type: "deposit",
      amount: 10000,
      status: "completed",
      date: "2023-07-28T09:22:00",
      counterparty: "Razorpay",
      details: "Credit Card ****9012",
    },
  ];

  // Mock data for balance history
  const balanceHistory = [
    { date: "Aug 1", energy: 1800, currency: 8000 },
    { date: "Aug 5", energy: 2100, currency: 10500 },
    { date: "Aug 10", energy: 1950, currency: 11200 },
    { date: "Aug 15", energy: 2200, currency: 9800 },
    { date: "Aug 20", energy: 2050, currency: 10800 },
    { date: "Aug 25", energy: 2300, currency: 11500 },
    { date: "Aug 30", energy: 2345, currency: 12850 },
  ];

  // Function to get transaction icon based on type
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <ArrowDown className="h-4 w-4" />;
      case "sell":
        return <ArrowUpRight className="h-4 w-4 transform rotate-45" />;
      case "deposit":
        return <Download className="h-4 w-4" />;
      case "withdraw":
        return <Upload className="h-4 w-4" />;
      default:
        return <RefreshCw className="h-4 w-4" />;
    }
  };

  // Function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-energy-green" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "failed":
        return <div className="h-4 w-4 text-destructive">✕</div>;
      default:
        return null;
    }
  };

  // Function to get transaction color
  const getTransactionColor = (type: string) => {
    switch (type) {
      case "buy":
        return "bg-energy-blue/20 text-energy-blue";
      case "sell":
        return "bg-energy-green/20 text-energy-green";
      case "deposit":
        return "bg-purple-500/20 text-purple-500";
      case "withdraw":
        return "bg-orange-500/20 text-orange-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <>
      <Helmet>
        <title>Energy Wallet | Energy Swap</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-energy-blue-light via-energy-blue to-energy-green">
              Energy Wallet
            </h1>
            <p className="mt-2 text-foreground/70">
              Manage your energy assets and financial transactions
            </p>
          </div>

          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              {/* Wallet Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <GlassCard animation="fade-in" className="bg-gradient-to-br from-energy-blue/20 to-energy-blue/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-foreground/70 mb-1">Energy Balance</div>
                      <div className="text-2xl font-bold">
                        {energyBalance.toLocaleString()} <span className="text-sm font-normal">kWh</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-energy-blue/20 flex items-center justify-center">
                      <WalletIcon className="h-5 w-5 text-energy-blue" />
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <div className="text-sm">Estimated Worth</div>
                    <div className="text-lg font-medium">₹{worthValue.toLocaleString()}</div>
                  </div>
                </GlassCard>
                
                <GlassCard animation="fade-in" className="bg-gradient-to-br from-energy-green/20 to-energy-green/5" style={{ animationDelay: '100ms' }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-foreground/70 mb-1">Available Balance</div>
                      <div className="text-2xl font-bold">
                        ₹{currencyBalance.toLocaleString()}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-energy-green/20 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-energy-green" />
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <div className="text-sm">Pending Balance</div>
                    <div className="text-lg font-medium">₹{pendingBalance.toLocaleString()}</div>
                  </div>
                </GlassCard>
                
                <GlassCard animation="fade-in" className="md:col-span-2" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Balance History</h3>
                    <div className="flex space-x-3 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-energy-blue mr-1"></div>
                        <span>Energy (kWh)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-energy-green mr-1"></div>
                        <span>Currency (₹/100)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={balanceHistory}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="date" tick={{ fill: '#94A3B8' }} />
                        <YAxis yAxisId="left" orientation="left" tick={{ fill: '#94A3B8' }} />
                        <YAxis yAxisId="right" orientation="right" tick={{ fill: '#94A3B8' }} />
                        <Tooltip
                          contentStyle={{ 
                            backgroundColor: 'rgba(17, 24, 39, 0.8)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#F9FAFB',
                          }}
                        />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="energy"
                          stroke="#0077B6"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="currency"
                          stroke="#38B000"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </GlassCard>
              </div>
              
              {/* Quick Actions */}
              <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2 bg-background/40 border-border/40 hover:bg-accent/50">
                    <Download className="h-6 w-6 text-energy-blue" />
                    <span>Deposit Funds</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2 bg-background/40 border-border/40 hover:bg-accent/50">
                    <Upload className="h-6 w-6 text-orange-500" />
                    <span>Withdraw</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2 bg-background/40 border-border/40 hover:bg-accent/50">
                    <ArrowDown className="h-6 w-6 text-energy-blue" />
                    <span>Buy Energy</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center gap-2 bg-background/40 border-border/40 hover:bg-accent/50">
                    <ArrowUpRight className="h-6 w-6 text-energy-green transform rotate-45" />
                    <span>Sell Energy</span>
                  </Button>
                </div>
              </div>
              
              {/* Recent Transactions */}
              <GlassCard className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Recent Transactions</h3>
                  <Button variant="link" className="text-energy-blue-light p-0">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {transactions.slice(0, 5).map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/40 hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex items-center">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center",
                            getTransactionColor(tx.type)
                          )}
                        >
                          {getTransactionIcon(tx.type)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium line-clamp-1">
                            {tx.type === "buy"
                              ? "Bought from"
                              : tx.type === "sell"
                              ? "Sold to"
                              : tx.type === "deposit"
                              ? "Deposit from"
                              : "Withdrawal to"}{" "}
                            {tx.counterparty}
                          </p>
                          <div className="flex items-center text-xs text-foreground/60">
                            {getStatusIcon(tx.status)}
                            <span className="ml-1">
                              {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)} •{" "}
                              {new Date(tx.date).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={cn(
                            "text-sm font-medium",
                            tx.type === "buy" || tx.type === "withdraw"
                              ? "text-red-400"
                              : "text-energy-green"
                          )}
                        >
                          {tx.type === "buy" || tx.type === "withdraw" ? "-" : "+"}
                          {tx.type === "buy" || tx.type === "sell"
                            ? `${tx.amount} kWh`
                            : `₹${tx.amount.toLocaleString()}`}
                        </p>
                        {tx.details && (
                          <p className="text-xs text-foreground/60">{tx.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </TabsContent>
            
            <TabsContent value="transactions">
              <GlassCard className="mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">All Transactions</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/40 hover:bg-accent/30 transition-colors"
                    >
                      <div className="flex items-center">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center",
                            getTransactionColor(tx.type)
                          )}
                        >
                          {getTransactionIcon(tx.type)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium line-clamp-1">
                            {tx.type === "buy"
                              ? "Bought from"
                              : tx.type === "sell"
                              ? "Sold to"
                              : tx.type === "deposit"
                              ? "Deposit from"
                              : "Withdrawal to"}{" "}
                            {tx.counterparty}
                          </p>
                          <div className="flex items-center text-xs text-foreground/60">
                            {getStatusIcon(tx.status)}
                            <span className="ml-1">
                              {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)} •{" "}
                              {new Date(tx.date).toLocaleString()} • ID: {tx.id}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={cn(
                            "text-sm font-medium",
                            tx.type === "buy" || tx.type === "withdraw"
                              ? "text-red-400"
                              : "text-energy-green"
                          )}
                        >
                          {tx.type === "buy" || tx.type === "withdraw" ? "-" : "+"}
                          {tx.type === "buy" || tx.type === "sell"
                            ? `${tx.amount} kWh`
                            : `₹${tx.amount.toLocaleString()}`}
                        </p>
                        {tx.details && (
                          <p className="text-xs text-foreground/60">{tx.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <GlassCard className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-background/40 border border-border/40">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-10 h-6 bg-blue-500 rounded mr-3"></div>
                            <div>
                              <p className="font-medium">VISA ending in 4242</p>
                              <p className="text-xs text-foreground/60">Expires 12/25</p>
                            </div>
                          </div>
                          <div>
                            <Button variant="ghost" size="sm">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-background/40 border border-border/40">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-10 h-6 bg-red-500 rounded mr-3"></div>
                            <div>
                              <p className="font-medium">Mastercard ending in 5678</p>
                              <p className="text-xs text-foreground/60">Expires 08/24</p>
                            </div>
                          </div>
                          <div>
                            <Button variant="ghost" size="sm">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        <PlusCircle className="h-4 w-4 mr-2" /> Add Payment Method
                      </Button>
                    </div>
                  </GlassCard>
                  
                  <GlassCard>
                    <h3 className="text-lg font-semibold mb-4">Transaction Settings</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 rounded-lg bg-background/40 border border-border/40">
                        <div>
                          <p className="font-medium">Auto-buy when prices drop</p>
                          <p className="text-xs text-foreground/60">
                            Automatically purchase energy when prices fall below your threshold
                          </p>
                        </div>
                        <div className="flex items-center h-6">
                          <input type="checkbox" className="toggle" />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 rounded-lg bg-background/40 border border-border/40">
                        <div>
                          <p className="font-medium">Price alerts</p>
                          <p className="text-xs text-foreground/60">
                            Receive notifications when energy prices change significantly
                          </p>
                        </div>
                        <div className="flex items-center h-6">
                          <input type="checkbox" className="toggle" checked />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 rounded-lg bg-background/40 border border-border/40">
                        <div>
                          <p className="font-medium">Two-factor authentication</p>
                          <p className="text-xs text-foreground/60">
                            Require 2FA for all transactions above ₹10,000
                          </p>
                        </div>
                        <div className="flex items-center h-6">
                          <input type="checkbox" className="toggle" checked />
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
                
                <div>
                  <GlassCard className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Account Limits</h3>
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Daily Transaction Limit</span>
                          <span className="text-xs font-medium">₹25,000 / ₹50,000</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Monthly Withdrawal Limit</span>
                          <span className="text-xs font-medium">₹75,000 / ₹200,000</span>
                        </div>
                        <Progress value={37.5} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Energy Storage Capacity</span>
                          <span className="text-xs font-medium">2,345 kWh / 5,000 kWh</span>
                        </div>
                        <Progress value={46.9} className="h-2" />
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-border/40">
                      <Button className="w-full">Upgrade Limits</Button>
                    </div>
                  </GlassCard>
                  
                  <GlassCard>
                    <h3 className="text-lg font-semibold mb-4">Security</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Security Questions
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Device Management
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Advanced Security Settings
                      </Button>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Wallet;
