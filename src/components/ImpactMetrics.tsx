import { Utensils, Scale, Heart, Users } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: Utensils,
      number: "12,347",
      label: "Meals Saved",
      description: "Delicious meals rescued from waste",
      color: "text-primary"
    },
    {
      icon: Scale,
      number: "8.2k kg",
      label: "Food Waste Prevented",
      description: "Equivalent to 18,000 lbs of food",
      color: "text-secondary"
    },
    {
      icon: Heart,
      number: "4,892",
      label: "Donations Made",
      description: "Meals donated to those in need",
      color: "text-accent"
    },
    {
      icon: Users,
      number: "156",
      label: "Community Partners",
      description: "Restaurants and charities working together",
      color: "text-primary"
    }
  ];

  return (
    <section className="section-padding bg-card/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Community Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we're making a real difference. Here's what we've accomplished as a community.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-card group animate-scale-in hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`${metric.color} mb-4`}>
                <metric.icon className="h-10 w-10 mx-auto" />
              </div>
              <div className="space-y-3">
                <div className="text-3xl lg:text-4xl font-bold gradient-impact bg-clip-text text-transparent">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold">
                  {metric.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
              
              {/* Animated progress bar */}
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full ${metric.color.replace('text-', 'bg-')} rounded-full animate-pulse`}
                  style={{
                    width: `${Math.min(90 + index * 2, 100)}%`,
                    animationDelay: `${index * 0.2 + 0.5}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Movement
            </h3>
            <p className="text-white/90 mb-6">
              Every meal you save or donate creates a ripple effect of positive change in your community.
            </p>
            <button 
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              onClick={() => window.open('https://food-share-impact.lovable.app/', '_blank')}
            >
              Start Making an Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;