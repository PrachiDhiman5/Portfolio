import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: 'General Inquiry',
    formType: 'Collaboration',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedData({ ...formData });
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', whatsapp: '', projectType: 'General Inquiry', formType: 'Collaboration', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, error: data.message || 'Failed to send message.', success: false });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, error: 'Network error. Please make sure the backend is running.', success: false });
    }
  };

  return status.success ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 text-center space-y-4"
    >
      <CheckCircle2 size={64} className="text-indigo-500 mb-2" />
      <h3 className="text-2xl font-heading font-bold text-white">Transmission Received</h3>
      <p className="text-zinc-400 font-mono text-sm max-w-sm">
        Your query has been securely transmitted. I will parse the data and respond shortly.
      </p>
      
      <div className="pt-4">
        <a 
          href={`https://wa.me/919034461378?text=${encodeURIComponent(`Hi Prachi, I just submitted a ${submittedData?.formType} request on your portfolio! \n\nName: ${submittedData?.name} \nEmail: ${submittedData?.email} \nType: ${submittedData?.projectType} \nMessage: ${submittedData?.message}`)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold rounded-full transition-all text-xs uppercase tracking-widest shadow-lg shadow-green-500/20"
        >
          Also Send via WhatsApp
        </a>
      </div>
    </motion.div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">Indentification</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">Return Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="whatsapp" className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">WhatsApp Number (Optional)</label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono text-sm"
          placeholder="+1 234 567 890"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="projectType" className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">Project Classification</label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono text-sm appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Machine Learning / AI Pipeline">Machine Learning / AI Pipeline</option>
          <option value="Full-Stack Web Development">Full-Stack Web Development</option>
          <option value="Android Mobile App">Android Mobile App</option>
          <option value="Data Analytics / Visualization">Data Analytics / Visualization</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">Payload</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          placeholder="Describe the architecture, problem set, or collaborative proposal..."
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono text-sm resize-none custom-scrollbar"
        ></textarea>
      </div>

      {status.error && (
        <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-sm font-mono">
          ERR: {status.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status.loading}
        className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-heading font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {status.loading ? 'Transmitting...' : 'Execute Payload'}
        {!status.loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
      </button>
    </form>
  );
};

export default ContactForm;
