import React, { useState } from "react";
import { motion } from "framer-motion";
import ShopifyCollection from "../components/ShopifyCollection.jsx";

// Sample products data - in real app this would come from API
const products = [
  { 
    id: 1,
    name: "Heritage Travel Polo", 
    price: "$89.00", 
    image: "/model-professional.png" 
  },
  { 
    id: 2,
    name: "Essential Cotton Tee", 
    price: "$45.00", 
    image: "/finainadress.png" 
  },
  { 
    id: 3,
    name: "Nomad Oversized Shirt", 
    price: "$72.00", 
    image: "/kamaushot.PNG" 
  },
  { 
    id: 4,
    name: "Heritage Knit Sweater", 
    price: "$118.00", 
    image: "/characterdev.png" 
  },
  { 
    id: 5,
    name: "Essential Travel Tank", 
    price: "$38.00", 
    image: "/zuluconcept.png" 
  },
  { 
    id: 6,
    name: "Luxury Casual Wear", 
    price: "$95.00", 
    image: "/locunizer.png" 
  }
];



// Product Card Component
const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-neutral-50">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-400 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="text-white text-sm tracking-wider font-light bg-black/20 px-6 py-2 backdrop-blur-sm">
              VIEW DETAILS
            </span>
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="pt-6 pb-12 text-center">
        <h3 className="font-serif text-lg tracking-wider uppercase text-neutral-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-500 font-light tracking-wide">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 py-4 px-6 md:px-12 bg-neutral-50/80 backdrop-blur-sm border-t border-neutral-200/50">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-neutral-400 tracking-wide">
      <span>BANTU ANTS</span>
      <span>© 2025</span>
    </div>
  </footer>
);

export default function Shop() {
  return (
    <>
      {/* Add Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@200;300;400;500&display=swap" rel="stylesheet" />
      
      <div 
        className="min-h-screen pb-16" 
        style={{ 
          backgroundColor: 'white',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
        }}
      >


        {/* Shopify Products Grid */}
        <main className="px-6 md:px-12">
          <ShopifyCollection />
        </main>

        {/* Spacer for footer */}
        <div className="h-24"></div>
      </div>

      {/* Sticky Footer */}
      <Footer />

      {/* Custom Styles for Fear of God aesthetic */}
      <style jsx>{`
        * {
          font-feature-settings: 'kern' 1, 'liga' 1;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .tracking-wider {
          letter-spacing: 0.1em;
        }
        
        .tracking-wide {
          letter-spacing: 0.05em;
        }
        
        .tracking-tight {
          letter-spacing: -0.02em;
        }
      `}</style>
    </>
  );
}
