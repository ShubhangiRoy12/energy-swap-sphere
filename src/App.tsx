
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Wallet from "./pages/Wallet";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="EnergiX - AI-Powered Energy Marketplace - Trade renewable energy efficiently with AI price predictions and smart matching" />
        <meta name="keywords" content="energy trading, renewable energy, AI marketplace, energy exchange" />
        <meta name="author" content="EnergiX" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
