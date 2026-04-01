import React from "react";
import { Utensils, Hospital, Star, ExternalLink, Phone } from "lucide-react";
import { motion } from "motion/react";

export const PromotionalColumns: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mb-12">
      {/* Salahuddin Restora */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-xl border border-orange-100 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Utensils className="w-24 h-24 text-orange-600" />
        </div>
        
        <div className="flex items-center gap-3 mb-4 text-orange-700">
          <div className="p-3 bg-orange-100 rounded-2xl">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Salahuddin Restora</h3>
        </div>

        <div className="space-y-4 relative z-10">
          <p className="text-gray-600 italic leading-relaxed">
            "Experience the finest traditional cuisine in Comilla. Our flavors tell a story of heritage and passion. Fresh, healthy, and delicious!"
          </p>
          
          <div className="flex items-center gap-1 text-orange-500">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            <span className="text-xs text-orange-700 font-bold ml-2">4.9/5 Rating</span>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 text-sm font-bold text-orange-700 hover:underline">
              <ExternalLink className="w-4 h-4" /> View Menu
            </a>
            <a href="tel:+880123456789" className="flex items-center gap-2 text-sm font-bold text-orange-700 hover:underline">
              <Phone className="w-4 h-4" /> Order Now
            </a>
          </div>
        </div>
      </motion.div>

      {/* Comilla Adarsha Hospital */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-xl border border-blue-100 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Hospital className="w-24 h-24 text-blue-600" />
        </div>

        <div className="flex items-center gap-3 mb-4 text-blue-700">
          <div className="p-3 bg-blue-100 rounded-2xl">
            <Hospital className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Comilla Adarsha Hospital</h3>
        </div>

        <div className="space-y-4 relative z-10">
          <p className="text-gray-600 italic leading-relaxed">
            "Your health is our priority. Providing advanced private healthcare with state-of-the-art facilities and specialized doctors."
          </p>

          <div className="flex items-center gap-1 text-blue-500">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            <span className="text-xs text-blue-700 font-bold ml-2">Premium Care</span>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline">
              <ExternalLink className="w-4 h-4" /> Visit Website
            </a>
            <a href="tel:+880987654321" className="flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline">
              <Phone className="w-4 h-4" /> Emergency
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
