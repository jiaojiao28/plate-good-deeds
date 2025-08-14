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
    <section className="section-padding gradient-works relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container-width relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 text-glow">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Making an impact is simple. Follow these three easy steps to start saving food and helping your community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group animate-scale-in relative"
              style={{animationDelay: `${index * 0.3}s`}}
            >
              {/* Step Number with Enhanced Design */}
              <div className="relative mb-10">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-card to-card/50 rounded-2xl flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500 shadow-step group-hover:shadow-step-hover group-hover:scale-110 group-hover:-rotate-3">
                  <step.icon className={`h-10 w-10 ${step.color} transition-all duration-300 group-hover:scale-125`} />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg animate-bounce">
                  {index + 1}
                </div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl ${step.color.replace('text-', 'bg-')}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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