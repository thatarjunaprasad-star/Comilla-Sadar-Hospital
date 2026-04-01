import React from "react";
import { Chatbot } from "./components/Chatbot";
import { PatientDatabase } from "./components/PatientDatabase";
import { PromotionalColumns } from "./components/PromotionalColumns";
import { Hospital, Phone, Globe, Mail, MapPin, HeartPulse, ShieldCheck, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-xl shadow-lg shadow-green-200">
              <Hospital className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-green-800 uppercase">Comilla Sadar Hospital</h1>
              <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Government Healthcare Service</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
            <a href="#" className="hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="hover:text-green-600 transition-colors">Departments</a>
            <a href="#" className="hover:text-green-600 transition-colors">Doctors</a>
            <a href="#" className="hover:text-green-600 transition-colors">Emergency</a>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-100">
              Book Appointment
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50/30 -z-10" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-black uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> Trusted Healthcare Excellence
              </div>
              <h2 className="text-6xl font-black tracking-tight leading-[0.9] text-gray-900">
                Caring for <span className="text-green-600 italic">Comilla</span> with Modern Medicine.
              </h2>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Experience world-class healthcare at Comilla Sadar Hospital. Our dedicated team of specialists and advanced technology ensure you receive the best possible care.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-lg"><Clock className="w-5 h-5 text-green-600" /></div>
                  <div><p className="text-xs font-bold text-gray-400 uppercase">Open 24/7</p><p className="font-bold text-sm">Emergency Care</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-lg"><HeartPulse className="w-5 h-5 text-green-600" /></div>
                  <div><p className="text-xs font-bold text-gray-400 uppercase">Specialists</p><p className="font-bold text-sm">50+ Doctors</p></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-green-200/30 blur-3xl rounded-full -z-10 animate-pulse" />
              <img 
                src="https://picsum.photos/seed/hospital/800/600" 
                alt="Hospital Building" 
                className="rounded-[40px] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="py-12 bg-green-50/20">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Have Questions? Ask Our AI</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Get instant information about hospital services, visiting hours, and more from our responsive chatbot.</p>
          </div>
          <Chatbot />
        </section>

        {/* Database Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Patient Management System</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Our integrated SQL database ensures secure and efficient tracking of patient admissions and medical history.</p>
          </div>
          <PatientDatabase />
        </section>

        {/* Promotional Section */}
        <section className="py-20 bg-green-50/10">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Our Partners & Local Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Supporting the community with quality food and alternative healthcare options.</p>
          </div>
          <PromotionalColumns />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-xl">
                <Hospital className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-black tracking-tight uppercase">Comilla Sadar Hospital</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the people of Comilla with dedication and care since its establishment. A government initiative for accessible healthcare.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doctor List</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-green-500" /> +880 81 12345</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-green-500" /> info@comillasadarhospital.gov.bd</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-green-500" /> Sadar Hospital Road, Comilla, Bangladesh</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Stay Connected</h4>
            <div className="flex items-center gap-3 mb-6">
              <a href="https://comillasadarhospital.gov.bd" target="_blank" className="p-3 bg-gray-800 rounded-xl hover:bg-green-600 transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500">Official Website: <br/><span className="text-green-500 font-bold">www.comillasadarhospital.gov.bd</span></p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 Comilla Sadar Hospital. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
