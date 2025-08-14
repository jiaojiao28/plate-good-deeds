import { Button } from "@/components/ui/button";
import { Store, Users, TrendingDown, Plus } from "lucide-react";
import chickenCurry from "@/assets/chicken-curry-rice.jpg";
import veggieBowl from "@/assets/veggie-bowl.jpg";

const ForPartners = () => {
  const restaurantBenefits = [
    {
      icon: TrendingDown,
      title: "Reduce Waste by 40%",
      description: "Turn surplus inventory into revenue instead of waste disposal costs."
    },
    {
      icon: Users,
      title: "Attract New Customers",
      description: "Reach environmentally conscious consumers who become loyal regulars."
    },
    {
      icon: Store,
      title: "Build Your Brand",
      description: "Position your restaurant as socially responsible and community-focused."
    }
  ];

  const charityBenefits = [
    {
      icon: Users,
      title: "Feed More People",
      description: "Access fresh, nutritious meals for your community programs."
    },
    {
      icon: Store,
      title: "Reliable Supply",
      description: "Partner with multiple restaurants for consistent food donations."
    },
    {
      icon: TrendingDown,
      title: "Reduce Costs",
      description: "Lower your food procurement expenses with donated meals."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        {/* Restaurants Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                For <span className="text-secondary">Restaurants</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your surplus food into profits while building a stronger community connection. 
                Join over 150 restaurants already making an impact.
              </p>
              
              <div className="space-y-6 mb-8">
                {restaurantBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 group">
                <Plus className="mr-2 h-5 w-5" />
                List Your Surplus Food
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="food-card bg-card rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={chickenCurry} 
                    alt="Restaurant food example"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">Butter Chicken Rice</h3>
                        <p className="text-muted-foreground">Spice Palace • 0.8 km</p>
                      </div>
                      <div className="discount-badge text-xs px-2 py-1 rounded-full text-secondary-foreground font-semibold">
                        65% OFF
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="text-lg font-bold text-foreground">$4.20</span>
                        <span className="text-sm text-muted-foreground line-through">$12.00</span>
                      </div>
                      <span className="text-sm text-muted-foreground">3 left</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  $847 saved this month
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charities Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="food-card bg-card rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={veggieBowl} 
                    alt="Donated food example"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">Rainbow Veggie Bowl</h3>
                        <p className="text-muted-foreground">Green Garden • Vegetarian</p>
                      </div>
                      <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                        DONATED
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      To: Downtown Community Center
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  127 meals donated
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                For <span className="text-primary">Charities</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access fresh, nutritious meals for your community programs. Our platform connects 
                you directly with local restaurants ready to donate surplus food.
              </p>
              
              <div className="space-y-6 mb-8">
                {charityBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="btn-hero">
                <Users className="mr-2 h-5 w-5" />
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPartners;