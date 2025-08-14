import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've saved over $50 a month on meals while helping reduce food waste. Love it!",
      name: "Sarah Chen",
      role: "Community Member",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      stats: "Saved 23 meals"
    },
    {
      quote: "We've reduced our daily waste by 40% and gained loyal new customers.",
      name: "James Rodriguez",
      role: "Restaurant Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      stats: "Partner since 2023"
    },
    {
      quote: "Thanks to donated meals, we can feed 30 more people every week.",
      name: "Aisha Patel",
      role: "Charity Coordinator",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      stats: "1,200+ meals received"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-accent fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from community members, restaurant partners, and charity coordinators who are making a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Quote Icon */}
              <div className="text-primary/20 mb-4">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.stats}
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">2,847</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;