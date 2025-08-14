-- Create restaurants table
CREATE TABLE public.restaurants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  latitude NUMERIC NOT NULL,
  longitude NUMERIC NOT NULL,
  cuisine_type TEXT,
  phone TEXT,
  email TEXT,
  available_meals INTEGER NOT NULL DEFAULT 0,
  operating_hours JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create charities table
CREATE TABLE public.charities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  latitude NUMERIC NOT NULL,
  longitude NUMERIC NOT NULL,
  description TEXT,
  contact_person TEXT,
  phone TEXT,
  email TEXT,
  capacity INTEGER,
  focus_areas TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create meals table to track available meals
CREATE TABLE public.meals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  original_price NUMERIC NOT NULL,
  discounted_price NUMERIC NOT NULL,
  quantity_available INTEGER NOT NULL DEFAULT 0,
  pickup_time_start TIME,
  pickup_time_end TIME,
  dietary_info TEXT[],
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.charities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meals ENABLE ROW LEVEL SECURITY;

-- Create RLS policies - Allow everyone to view (public information)
CREATE POLICY "Restaurants are viewable by everyone"
ON public.restaurants
FOR SELECT
USING (true);

CREATE POLICY "Charities are viewable by everyone"
ON public.charities
FOR SELECT
USING (true);

CREATE POLICY "Active meals are viewable by everyone"
ON public.meals
FOR SELECT
USING (is_active = true AND quantity_available > 0);

-- Create indexes for performance
CREATE INDEX idx_restaurants_location ON public.restaurants(latitude, longitude);
CREATE INDEX idx_charities_location ON public.charities(latitude, longitude);
CREATE INDEX idx_meals_restaurant_active ON public.meals(restaurant_id, is_active, quantity_available);

-- Insert sample data
INSERT INTO public.restaurants (name, address, latitude, longitude, cuisine_type, phone, available_meals) VALUES
('Bella Italia', '123 Main St, Downtown', 40.7589, -73.9851, 'Italian', '555-0101', 8),
('Dragon Palace', '456 Oak Ave, Midtown', 40.7505, -73.9934, 'Chinese', '555-0102', 12),
('Green Garden Cafe', '789 Pine St, Uptown', 40.7831, -73.9712, 'Vegetarian', '555-0103', 6),
('Mumbai Spice', '321 Elm St, Downtown', 40.7614, -73.9776, 'Indian', '555-0104', 15),
('Fresh & Fast', '654 Maple Ave, Midtown', 40.7549, -73.9840, 'Health Food', '555-0105', 4);

INSERT INTO public.charities (name, address, latitude, longitude, description, contact_person, phone, capacity) VALUES
('City Food Bank', '100 Charity Lane, Downtown', 40.7580, -73.9855, 'Providing meals to families in need since 1985', 'Sarah Johnson', '555-0201', 200),
('Hope Kitchen', '250 Helper St, Midtown', 40.7520, -73.9920, 'Daily hot meals and food assistance programs', 'Mike Chen', '555-0202', 150),
('Community Care Center', '400 Support Ave, Uptown', 40.7820, -73.9720, 'Comprehensive support services including meals', 'Lisa Williams', '555-0203', 100),
('Neighbors Helping Neighbors', '175 Unity Blvd, Downtown', 40.7600, -73.9800, 'Local grassroots organization serving the community', 'David Martinez', '555-0204', 75);

INSERT INTO public.meals (restaurant_id, name, description, original_price, discounted_price, quantity_available, pickup_time_start, pickup_time_end, dietary_info) VALUES
((SELECT id FROM public.restaurants WHERE name = 'Bella Italia'), 'Margherita Pizza', 'Fresh mozzarella, tomato sauce, basil', 18.99, 7.99, 3, '18:00', '20:00', ARRAY['Vegetarian']),
((SELECT id FROM public.restaurants WHERE name = 'Dragon Palace'), 'Sweet & Sour Chicken', 'Crispy chicken with vegetables in tangy sauce', 15.99, 5.99, 5, '17:30', '19:30', ARRAY[]),
((SELECT id FROM public.restaurants WHERE name = 'Green Garden Cafe'), 'Buddha Bowl', 'Quinoa, roasted vegetables, tahini dressing', 14.99, 6.99, 2, '16:00', '18:00', ARRAY['Vegan', 'Gluten-Free']),
((SELECT id FROM public.restaurants WHERE name = 'Mumbai Spice'), 'Chicken Tikka Masala', 'Tender chicken in creamy tomato sauce with rice', 16.99, 7.99, 4, '18:30', '21:00', ARRAY['Gluten-Free']),
((SELECT id FROM public.restaurants WHERE name = 'Fresh & Fast'), 'Mediterranean Wrap', 'Grilled vegetables, hummus, whole wheat wrap', 12.99, 4.99, 2, '17:00', '19:00', ARRAY['Vegetarian']);

-- Create trigger for updated_at
CREATE TRIGGER update_restaurants_updated_at
BEFORE UPDATE ON public.restaurants
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_charities_updated_at
BEFORE UPDATE ON public.charities
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_meals_updated_at
BEFORE UPDATE ON public.meals
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();