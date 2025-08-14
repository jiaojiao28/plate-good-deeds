import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food-spread.jpg";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-width text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Save Food. <span className="text-primary">Save Money.</span>
            <br />
            <span className="text-secondary">Help Your Community.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Buy discounted meals from local restaurants or donate them to those in need. 
            Reduce food waste and fight hunger — one meal at a time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="btn-hero group">
              Browse Meals
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-secondary-hero group">
              <Heart className="mr-2 h-5 w-5" />
              Donate Food
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
      
      {/* Floating Cards Preview */}
      <div className="absolute bottom-8 left-4 right-4 flex justify-center">
        <div className="flex gap-4 opacity-90">
          <div className="bg-card border border-primary/20 rounded-xl p-4 backdrop-blur-sm animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="discount-badge text-xs px-2 py-1 rounded-full text-secondary-foreground font-semibold mb-2">
              60% OFF
            </div>
            <p className="text-sm font-medium">Chicken Curry Rice</p>
            <p className="text-xs text-muted-foreground">2 left • Pickup 6-8pm</p>
          </div>
          <div className="bg-card border border-primary/20 rounded-xl p-4 backdrop-blur-sm animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold mb-2">
              DONATED
            </div>
            <p className="text-sm font-medium">Veggie Garden Bowl</p>
            <p className="text-xs text-muted-foreground">To Local Food Bank</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;