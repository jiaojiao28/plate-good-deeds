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
    <section className="section-padding bg-gradient-impact-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-width relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-8 text-glow">
            Our <span className="text-primary">Community</span> Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Together, we're making a real difference. Here's what we've accomplished as a community.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-card-enhanced group animate-scale-in hover:scale-105 relative"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Icon with Enhanced Styling */}
              <div className={`${metric.color} mb-6 relative`}>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-card to-muted rounded-2xl flex items-center justify-center group-hover:shadow-icon transition-all duration-500 group-hover:scale-110">
                  <metric.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-125" />
                </div>
                {/* Icon Glow */}
                <div className={`absolute inset-0 rounded-2xl ${metric.color.replace('text-', 'bg-')}/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl lg:text-5xl font-bold gradient-impact bg-clip-text text-transparent counter-animation">
                  {metric.number}
                </div>
                <div className="text-lg font-bold text-foreground">
                  {metric.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
              
              {/* Enhanced Progress Bar */}
              <div className="mt-6 h-2 bg-muted/50 rounded-full overflow-hidden relative">
                <div 
                  className={`h-full bg-gradient-to-r ${metric.color.replace('text-', 'from-')} ${metric.color.replace('text-', 'to-')}-hover rounded-full progress-fill shadow-sm`}
                  style={{
                    width: `${Math.min(85 + index * 3, 100)}%`,
                    animationDelay: `${index * 0.3 + 1}s`
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.color.replace('text-', 'from-')} ${metric.color.replace('text-', 'to-')}-hover rounded-full opacity-50 blur-sm progress-glow`} />
              </div>
              
              {/* Background Decoration */}
              <div className={`absolute -inset-2 rounded-3xl ${metric.color.replace('text-', 'bg-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
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