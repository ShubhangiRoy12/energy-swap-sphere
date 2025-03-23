
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Zap, Shield, LineChart, Users, Database, BarChart4 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import { Progress } from "@/components/ui/progress";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Trading",
      description: "Advanced AI algorithms match buyers and sellers for optimal energy pricing and distribution.",
      color: "text-energy-blue-light"
    },
    {
      icon: LineChart,
      title: "Smart Forecasting",
      description: "Predict energy prices and demand patterns with our AI-driven analytics engine.",
      color: "text-energy-green"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "End-to-end encryption and escrow system ensures safe and transparent trading.",
      color: "text-energy-blue"
    },
    {
      icon: Database,
      title: "Digital Energy Wallet",
      description: "Manage your energy credits, transactions, and rewards in a secure digital wallet.",
      color: "text-purple-400"
    },
    {
      icon: BarChart4,
      title: "Real-time Analytics",
      description: "Monitor your energy usage, sales, and market trends with comprehensive dashboards.",
      color: "text-amber-400"
    },
    {
      icon: Users,
      title: "P2P Energy Exchange",
      description: "Trade directly with other users in a decentralized marketplace for better pricing.",
      color: "text-teal-400"
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Solar Farm Owner",
      content: "EnergiX has revolutionized how I sell my excess solar energy. The AI matching system consistently finds me the best rates in the market.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Manufacturing Plant Manager",
      content: "We've reduced our energy costs by 23% since joining EnergiX. The price forecasting tools help us purchase energy when rates are most favorable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Anand Verma",
      role: "Tech Startup CEO",
      content: "The platform's security features and transparent transactions gave us confidence to transition all our energy procurement to EnergiX.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    }
  ];

  // Stats data
  const stats = [
    { value: "45K+", label: "Active Users" },
    { value: "₹2.3B", label: "Energy Traded" },
    { value: "98.5%", label: "Matching Accuracy" },
    { value: "12.4M", label: "kWh Exchanged" }
  ];

  return (
    <>
      <Helmet>
        <title>EnergiX | AI-Powered Energy Marketplace</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-background overflow-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-energy-blue/20 blur-3xl transform -translate-y-1/2"></div>
            <div className="absolute -bottom-80 -left-40 w-96 h-96 rounded-full bg-energy-green/20 blur-3xl"></div>
            <div className="grid-pattern absolute inset-0 opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Column - Text */}
              <div className="flex-1 text-left animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/50 text-energy-blue-light mb-6">
                  <span className="animate-pulse mr-2">⚡</span> Revolutionizing Energy Trading
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-energy-blue-light via-energy-blue to-energy-green leading-tight">
                  AI-Powered Energy Exchange Platform
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-2xl">
                  EnergiX connects buyers and sellers of renewable energy using advanced AI technologies for optimal pricing, forecasting, and smart matching.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-energy-blue to-energy-green hover:opacity-90 transition-opacity"
                    onClick={() => navigate("/dashboard")}
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => navigate("/marketplace")}
                  >
                    Explore Marketplace
                  </Button>
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-energy-blue-light to-energy-green">
                        {stat.value}
                      </p>
                      <p className="text-sm text-foreground/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Illustration */}
              <div className="flex-1 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <GlassCard className="relative overflow-hidden p-0 h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-energy-blue/20 to-energy-green/20"></div>
                  <div className="absolute inset-0 grid-pattern opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full max-w-md">
                      {/* Animated Energy Graph Mockup */}
                      <div className="p-4 bg-background/60 backdrop-blur-md rounded-lg border border-white/10 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium text-energy-blue-light">Energy Trading Activity</h3>
                          <span className="text-xs text-foreground/60">Live</span>
                        </div>
                        <div className="space-y-3">
                          {[65, 82, 45, 78, 90].map((value, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-foreground/70">Energy Source {i+1}</span>
                                <span className="text-energy-blue-light">{value}%</span>
                              </div>
                              <Progress value={value} className={`h-2 ${i % 2 === 0 ? 'bg-energy-blue/20' : 'bg-energy-green/20'}`} />
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                          <div className="text-xs text-foreground/70">
                            <div>Next prediction in: <span className="text-energy-blue-light">2m 45s</span></div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs h-7 px-2">View Details</Button>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-energy-blue/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-energy-green/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-energy-blue/10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-energy-green/10 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-energy-blue-light to-energy-green">
              Powerful Features
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              EnergiX combines cutting-edge AI with secure transaction systems to create the most efficient energy marketplace.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard 
                key={index} 
                className="relative h-full" 
                glowColor={index % 2 === 0 ? "blue" : "green"}
                animation="fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color} bg-white/5 mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-energy-blue-light to-energy-green">
                How EnergiX Works
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Our AI-powered platform streamlines the entire energy trading process
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-energy-blue/50 to-energy-green/50 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "List or Request Energy",
                    description: "Specify your energy needs or excess capacity with just a few clicks",
                    delay: "100ms",
                  },
                  {
                    step: "2",
                    title: "AI Smart Matching",
                    description: "Our AI engine matches buyers and sellers for optimal pricing and efficiency",
                    delay: "300ms",
                  },
                  {
                    step: "3",
                    title: "Secure Transaction",
                    description: "Complete the trade through our secure escrow system with full transparency",
                    delay: "500ms",
                  }
                ].map((item, index) => (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: item.delay }}>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-energy-blue to-energy-green flex items-center justify-center text-white font-bold text-lg mb-4">
                        {item.step}
                      </div>
                      <GlassCard className="w-full text-center h-full">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-foreground/70">{item.description}</p>
                      </GlassCard>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-energy-blue to-energy-green hover:opacity-90 transition-opacity"
                onClick={() => navigate("/dashboard")}
              >
                Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-energy-blue/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-energy-green/10 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-energy-blue-light to-energy-green">
                What Our Users Say
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Join thousands of satisfied users who are transforming how they buy and sell energy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <GlassCard 
                  key={index} 
                  className="h-full"
                  glowColor={index % 2 === 0 ? "blue" : "green"}
                  animation="fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col h-full">
                    <p className="text-foreground/80 mb-6 flex-grow">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 border-2 border-energy-blue/30"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-energy-blue/20 to-energy-green/20 pointer-events-none"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-energy-blue-light to-energy-green">
                  Ready to Transform Your Energy Trading?
                </h2>
                <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Join EnergiX today and experience the future of renewable energy exchange
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-energy-blue to-energy-green hover:opacity-90 transition-opacity"
                    onClick={() => navigate("/dashboard")}
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Landing;
