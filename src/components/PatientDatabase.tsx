import React, { useState, useEffect } from "react";
import { Patient } from "../types";
import { UserPlus, History, Search, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const PatientDatabase: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState<Patient>({
    name: "",
    age: 0,
    gender: "Male",
    history: "",
    contact: ""
  });

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/patients");
      if (!response.ok) throw new Error("Failed to fetch patients");
      const data = await response.json();
      setPatients(data);
    } catch (err) {
      setError("Could not load patient history. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to admit patient");
      
      setSuccess("Patient admitted successfully!");
      setFormData({ name: "", age: 0, gender: "Male", history: "", contact: "" });
      fetchPatients();
    } catch (err) {
      setError("Failed to admit patient. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Admission Form */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-3xl shadow-xl border border-green-100"
      >
        <div className="flex items-center gap-3 mb-6 text-green-700">
          <UserPlus className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Patient Admission</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Age</label>
              <input
                required
                type="number"
                value={formData.age || ""}
                onChange={e => setFormData({ ...formData, age: parseInt(e.target.value) })}
                className="w-full px-4 py-2 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="25"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Gender</label>
              <select
                value={formData.gender}
                onChange={e => setFormData({ ...formData, gender: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Contact Number</label>
              <input
                required
                type="tel"
                value={formData.contact}
                onChange={e => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="+880 1234..."
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Medical History / Symptoms</label>
            <textarea
              rows={4}
              value={formData.history}
              onChange={e => setFormData({ ...formData, history: e.target.value })}
              className="w-full px-4 py-2 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Describe symptoms or previous history..."
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                <AlertCircle className="w-4 h-4" /> {error}
              </motion.div>
            )}
            {success && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl text-sm">
                <CheckCircle2 className="w-4 h-4" /> {success}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Admit Patient"}
          </button>
        </form>
      </motion.div>

      {/* History Table */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 flex flex-col h-full"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-green-700">
            <History className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Patient History</h2>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-1.5 rounded-full border border-green-100 text-sm focus:ring-2 focus:ring-green-500 outline-none w-40 md:w-60"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p>Loading history...</p>
            </div>
          ) : filteredPatients.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
              <History className="w-12 h-12 opacity-20" />
              <p>No records found</p>
            </div>
          ) : (
            filteredPatients.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-2xl border border-green-50 bg-green-50/20 hover:bg-green-50/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800">{p.name}</h4>
                    <p className="text-xs text-gray-500">{p.age} yrs • {p.gender}</p>
                  </div>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                    {p.admission_date ? new Date(p.admission_date).toLocaleDateString() : "N/A"}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 italic">"{p.history}"</p>
                <div className="mt-2 text-xs text-green-600 font-medium">
                  Contact: {p.contact}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};
