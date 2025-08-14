import { Search, ShoppingCart, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find a Meal",
      description: "Browse discounted food from restaurants near you. Filter by cuisine, dietary needs, and pickup time.",
      color: "text-primary"
    },
    {
      icon: ShoppingCart,
      title: "Buy or Donate",
      description: "Purchase for yourself or donate directly to a local charity. Every action makes a difference.",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Make an Impact",
      description: "Reduce waste, feed people in need, and track your contribution to the community.",
      color: "text-accent"
    }
  ];

  return (
    <section className="section-padding gradient-hero">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making an impact is simple. Follow these three easy steps to start saving food and helping your community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-card rounded-full flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Connection Lines */}
        <div className="hidden md:flex justify-center items-center mt-12">
          <div className="flex items-center space-x-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-50" />
            <div className="w-6 h-6 rounded-full bg-primary/20" />
            <div className="w-24 h-0.5 bg-gradient-to-r from-secondary to-accent opacity-50" />
            <div className="w-6 h-6 rounded-full bg-secondary/20" />
            <div className="w-24 h-0.5 bg-gradient-to-r from-accent to-primary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;