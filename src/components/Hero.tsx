import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food-spread.jpg";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Multiple Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/25 rounded-full animate-float" style={{animationDelay: '3s'}} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-width text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
            <span className="block text-glow animate-slide-down">Save Food.</span>
            <span className="block text-primary text-glow animate-slide-down" style={{animationDelay: '0.2s'}}>Save Money.</span>
            <span className="block text-secondary text-glow animate-slide-down" style={{animationDelay: '0.4s'}}>Help Community.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Buy discounted meals from local restaurants or donate them to those in need. 
            Reduce food waste and fight hunger — one meal at a time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              className="btn-hero group relative overflow-hidden"
              onClick={() => window.open('https://food-share-impact.lovable.app/', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Browse Meals</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
            </Button>
            <Button 
              className="btn-secondary-hero group relative overflow-hidden"
              onClick={() => window.open('https://food-share-impact.lovable.app/', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-hover to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Donate Food</span>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>1,247 meals saved this week</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span>89 partner restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>34 charity partners</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Cards Preview */}
      <div className="absolute bottom-8 left-4 right-4 flex justify-center">
        <div className="flex gap-6 opacity-95">
          <div className="food-card bg-card/90 border border-primary/30 rounded-2xl p-5 backdrop-blur-md animate-float-card shadow-glow" style={{animationDelay: '0.8s'}}>
            <div className="discount-badge text-xs px-3 py-1 rounded-full text-secondary-foreground font-bold mb-3 animate-pulse">
              60% OFF
            </div>
            <p className="text-sm font-semibold mb-1">Chicken Curry Rice</p>
            <p className="text-xs text-muted-foreground">2 left • Pickup 6-8pm</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-xs text-secondary font-medium">Hot Deal!</span>
            </div>
          </div>
          <div className="food-card bg-card/90 border border-primary/30 rounded-2xl p-5 backdrop-blur-md animate-float-card shadow-glow" style={{animationDelay: '1s'}}>
            <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground text-xs px-3 py-1 rounded-full font-bold mb-3">
              DONATED
            </div>
            <p className="text-sm font-semibold mb-1">Veggie Garden Bowl</p>
            <p className="text-xs text-muted-foreground">To Local Food Bank</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs text-accent font-medium">Impact!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;