import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you save food and make an impact. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('how') && (message.includes('work') || message.includes('platform'))) {
      return "Great question! Here's how it works: 1) Browse discounted meals from local restaurants 2) Choose to buy for yourself or donate to someone in need 3) Pick up your meal or have it delivered to a charity. You save money, reduce waste, and help feed people! 🌱";
    }
    
    if (message.includes('buy') || message.includes('purchase')) {
      return "To buy a meal: Visit our marketplace, browse available meals near you, select your preferred meal, and complete your purchase. You'll get pickup instructions and save up to 60% off regular prices! Want me to direct you to the marketplace?";
    }
    
    if (message.includes('donate') || message.includes('donation')) {
      return "Donating is easy and impactful! Simply browse available meals, click 'Donate' instead of 'Buy', and we'll send that meal to a local food bank or charity. Every donation helps feed someone in need. Would you like to see available meals to donate?";
    }
    
    if (message.includes('restaurant') || message.includes('partner')) {
      return "Restaurants love our platform! They reduce waste by 40% on average, attract new customers, and build a socially responsible brand. It's a win-win-win situation. Are you a restaurant owner interested in joining?";
    }
    
    if (message.includes('pickup') || message.includes('delivery')) {
      return "Most meals are available for pickup during specified time windows (usually 2-3 hours). Some partner restaurants also offer delivery to charity locations for donated meals. You'll see pickup details when browsing meals!";
    }
    
    if (message.includes('discount') || message.includes('price')) {
      return "Our discounts range from 30% to 70% off regular menu prices! The closer to closing time, the deeper the discounts. This helps restaurants reduce waste while giving you amazing deals on fresh, quality food.";
    }
    
    if (message.includes('charity') || message.includes('food bank')) {
      return "We partner with 34+ local charities and food banks. When you donate a meal, it goes directly to organizations that distribute food to families in need. Your donation makes a real difference in your community!";
    }
    
    if (message.includes('impact') || message.includes('waste')) {
      return "Together, we've saved 12,347 meals and prevented 8.2k kg of food waste! Every meal saved reduces environmental impact and helps feed people in need. You're part of a movement that's making real change! 🌍";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to Food Waste No More! I'm here to help you save food, save money, and help your community. What would you like to know about our platform?";
    }
    
    if (message.includes('thanks') || message.includes('thank you')) {
      return "You're very welcome! Is there anything else I can help you with today? I'm here to make your food-saving journey as smooth as possible! 😊";
    }
    
    // Default response
    return "I'm here to help! You can ask me about: • How our platform works • Buying discounted meals • Donating meals to charity • Restaurant partnerships • Pickup and delivery • Our community impact. What interests you most?";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot thinking time
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "h-14 w-14 rounded-full shadow-elegant hover:scale-110 transition-all duration-300",
            isOpen ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"
          )}
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-card border border-border rounded-2xl shadow-elegant overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold">Food Waste Helper</h3>
                <p className="text-xs opacity-90">Always here to help!</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto h-[340px] custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {message.sender === 'bot' && (
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[70%] p-3 rounded-2xl text-sm leading-relaxed",
                    message.sender === 'user' 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted"
                  )}
                >
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <div className="h-8 w-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about our platform..."
                className="flex-1 px-3 py-2 border border-input rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="h-10 w-10 rounded-full p-0"
                disabled={!inputText.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;