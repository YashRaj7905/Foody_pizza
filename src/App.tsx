/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Pizza, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Truck, 
  Utensils,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'Pizzas' | 'Special Items' | 'Sides';
}

// --- Constants ---
const MENU_ITEMS: MenuItem[] = [
  // Pizzas
  { id: 1, name: "Golden Corn Pizza", price: "₹99", description: "Sweet corn with extra cheese", image: "https://picsum.photos/seed/cornpizza/400/300", category: 'Pizzas' },
  { id: 2, name: "Paneer Pizza", price: "₹149", description: "Fresh paneer cubes with capsicum", image: "https://picsum.photos/seed/paneerpizza/400/300", category: 'Pizzas' },
  { id: 3, name: "Veggie Pizza", price: "₹129", description: "Loaded with seasonal vegetables", image: "https://picsum.photos/seed/veggiepizza/400/300", category: 'Pizzas' },
  { id: 4, name: "Tomato Pizza", price: "₹89", description: "Classic tomato and cheese", image: "https://picsum.photos/seed/tomatopizza/400/300", category: 'Pizzas' },
  // Special Items
  { id: 5, name: "Two in One Pizza", price: "₹199", description: "Double the toppings, double the fun", image: "https://picsum.photos/seed/twoinone/400/300", category: 'Special Items' },
  { id: 6, name: "Yam Dum Pizza", price: "₹189", description: "Spicy yam with special dum masala", image: "https://picsum.photos/seed/yamdum/400/300", category: 'Special Items' },
  { id: 7, name: "Name Pizza", price: "₹179", description: "Customized with your favorite toppings", image: "https://picsum.photos/seed/namepizza/400/300", category: 'Special Items' },
  // Sides
  { id: 8, name: "Pizza Burger", price: "₹79", description: "The best of both worlds", image: "https://picsum.photos/seed/pizzaburger/400/300", category: 'Sides' },
  { id: 9, name: "Coffee", price: "₹49", description: "Hot brewed aromatic coffee", image: "https://picsum.photos/seed/coffee/400/300", category: 'Sides' },
  { id: 10, name: "Brownies with Chocolate Sauce", price: "₹119", description: "Rich chocolate brownie with gooey sauce", image: "https://picsum.photos/seed/brownie/400/300", category: 'Sides' },
];

const REVIEWS = [
  { id: 1, name: "Rahul Singh", rating: 5, comment: "Best place for pizza lovers, amazing taste!", date: "2 days ago" },
  { id: 2, name: "Anjali Verma", rating: 5, comment: "Perfect cheese and crispy texture. Highly recommended.", date: "1 week ago" },
  { id: 3, name: "Amit Kumar", rating: 4, comment: "Awesome experience and great service. Very budget friendly.", date: "3 days ago" },
];

const GALLERY = [
  "https://picsum.photos/seed/pizza1/600/400",
  "https://picsum.photos/seed/pizza2/600/400",
  "https://picsum.photos/seed/cafe1/600/400",
  "https://picsum.photos/seed/pizza3/600/400",
  "https://picsum.photos/seed/cafe2/600/400",
  "https://picsum.photos/seed/pizza4/600/400",
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-lg">
            <Pizza className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            FOODY <span className="text-yellow-500">PIZZA</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-white/80 hover:text-yellow-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:08787276923" 
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2"
          >
            <Phone size={16} />
            CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-yellow-500"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:08787276923" 
                className="bg-red-600 text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                CALL NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/hero-pizza/1920/1080?blur=2" 
          alt="Delicious Pizza" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Star size={14} fill="currentColor" />
            Top Rated in Lucknow
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
            FOODY <span className="text-red-600">PIZZA</span>
            <br />
            <span className="text-yellow-500 font-serif italic text-4xl md:text-6xl font-normal lowercase tracking-normal">फूडी पिज़्ज़ा</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
            Delicious, cheesy, and affordable pizzas for everyone. Experience the authentic taste of Lucknow's favorite pizza spot.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105">
              <ShoppingBag size={20} />
              ORDER NOW
            </a>
            <a href="#menu" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
              VIEW MENU
              <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center bg-yellow-500 p-6 rounded-full w-32 h-32 justify-center text-center shadow-2xl rotate-12"
      >
        <span className="text-black font-black text-2xl leading-none">₹99</span>
        <span className="text-black text-[10px] font-bold uppercase tracking-tighter">Starting At</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/about-pizza/800/800" 
                alt="Our Kitchen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-red-600 text-white p-8 rounded-3xl shadow-xl hidden sm:block">
              <p className="text-4xl font-black">4.7</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Rating</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />)}
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-red-600 font-black uppercase tracking-widest text-sm">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-black text-black leading-tight">
                The Most Popular Pizza Spot in Rajajipuram
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located in the heart of Lucknow, Foody Pizza has become the go-to destination for pizza lovers. We pride ourselves on our great taste, exceptional service, and cozy ambiance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Utensils />, title: "Great Taste", desc: "Fresh ingredients daily" },
                { icon: <Truck />, title: "Fast Delivery", desc: "Hot & fresh to your door" },
                { icon: <Clock />, title: "11 AM - 11 PM", desc: "Open all week" },
                { icon: <ShoppingBag />, title: "Budget Friendly", desc: "Value for your money" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-black font-bold flex items-center gap-2 group">
              Learn more about us 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<'Pizzas' | 'Special Items' | 'Sides'>('Pizzas');
  const categories: ('Pizzas' | 'Special Items' | 'Sides')[] = ['Pizzas', 'Special Items', 'Sides'];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-red-600 font-black uppercase tracking-widest text-sm">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-black text-black">Deliciously Crafted</h3>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-200 scale-105' 
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black font-black px-3 py-1 rounded-lg text-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-xl font-bold text-black">{item.name}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                  <button className="w-full mt-4 bg-gray-100 hover:bg-red-600 hover:text-white text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-yellow-500 font-black uppercase tracking-widest text-sm">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              What Our <span className="text-red-600">Customers</span> Say
            </h3>
            <p className="text-white/60 text-lg">
              We've served thousands of happy pizza lovers in Lucknow. Here's why they keep coming back.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-black" alt="User" />
                ))}
              </div>
              <p className="text-sm font-bold">Join 278+ happy reviewers</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className="text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-white/40 font-bold uppercase">{review.date}</span>
                </div>
                <p className="text-lg font-medium italic text-white/90">"{review.comment}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <span className="font-bold">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Utensils size={40} />, title: "Dine-in", desc: "Cozy ambiance with great music and vibes." },
    { icon: <ShoppingBag size={40} />, title: "Takeaway", desc: "Quick pickup for your busy schedule." },
    { icon: <Truck size={40} />, title: "No-contact Delivery", desc: "Safe and hygienic delivery to your doorstep." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="text-center space-y-6 p-10 rounded-3xl bg-gray-50 hover:bg-red-50 transition-colors group"
            >
              <div className="inline-flex p-6 rounded-2xl bg-white text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-black">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-red-600 font-black uppercase tracking-widest text-sm">Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-black text-black">Vibes & Slices</h3>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img src={img} alt="Gallery" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-red-600 font-black uppercase tracking-widest text-sm">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-black">Visit Foody Pizza</h3>
              <p className="text-gray-600 text-lg">
                We are located in Rajajipuram, Lucknow. Come over for a slice or order online!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="bg-red-100 text-red-600 p-4 rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-xl">Address</h4>
                  <p className="text-gray-500">Shop no 06, Para Rd, Gayatri Vihar, Rajajipuram, Lucknow, UP 226011</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-yellow-100 text-yellow-600 p-4 rounded-2xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-xl">Phone</h4>
                  <a href="tel:08787276923" className="text-gray-500 hover:text-red-600 transition-colors">087872 76923</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-black text-white p-4 rounded-2xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-xl">Opening Hours</h4>
                  <p className="text-gray-500">11:00 AM - 11:00 PM (Daily)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Foody+Pizza+Rajajipuram+Lucknow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-all"
              >
                <MapPin size={20} />
                GET DIRECTIONS
              </a>
              <a 
                href="tel:08787276923" 
                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-red-700 transition-all"
              >
                <Phone size={20} />
                CALL NOW
              </a>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
            {/* Embedded Google Map - Using a placeholder iframe for demonstration */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.876543210!2d80.876543210!3d26.876543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0000000000%3A0x0000000000000000!2sFoody%20Pizza!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Foody Pizza Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Pizza className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                FOODY <span className="text-yellow-500">PIZZA</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Serving the most delicious, cheesy, and affordable pizzas in Lucknow. Quality you can taste, service you can trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-red-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-red-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-white/10 p-3 rounded-xl hover:bg-red-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-yellow-500 transition-colors">Our Menu</a></li>
              <li><a href="#reviews" className="hover:text-yellow-500 transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/50 mb-6">Subscribe to get special offers and pizza news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-yellow-500"
              />
              <button className="bg-red-600 p-3 rounded-xl hover:bg-red-700 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-white/30 text-sm font-medium">
          <p>© {new Date().getFullYear()} Foody Pizza Lucknow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-600 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
