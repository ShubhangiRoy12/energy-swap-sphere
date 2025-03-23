
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnergyWallet from "@/components/Dashboard/EnergyWallet";
import TradingInsights from "@/components/Dashboard/TradingInsights";
import MarketplacePreview from "@/components/Dashboard/MarketplacePreview";
import EnergyStats from "@/components/Dashboard/EnergyStats";
import AIAdvisor from "@/components/AIAdvisor/AIAdvisor";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EnergiX | AI-Powered Energy Marketplace</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-energy-blue-light via-energy-blue to-energy-green">
              Energy Dashboard
            </h1>
            <p className="mt-2 text-foreground/70">
              Welcome to your AI-powered energy trading platform
            </p>
          </div>
          
          {/* Energy Stats Section */}
          <section className="mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <EnergyStats />
          </section>
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Trading Insights */}
            <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <TradingInsights />
            </div>
            
            {/* Marketplace Preview */}
            <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <MarketplacePreview />
            </div>
            
            {/* Energy Wallet */}
            <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <EnergyWallet />
            </div>
          </div>
        </main>
        <Footer />
        
        {/* AI Advisor Floating Action Button */}
        <AIAdvisor />
      </div>
    </>
  );
};

export default Index;
