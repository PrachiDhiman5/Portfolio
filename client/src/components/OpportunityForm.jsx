import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const OpportunityForm = () => {
  const [formData, setFormData] = useState({
    recruiterName: '',
    companyEmail: '',
    whatsapp: '',
    opportunityType: 'Full-Time Engineering Role',
    formType: 'Opportunity',
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
      // Reusing the same endpoint, just serializing our new fields slightly differently if needed
      // but assuming the backend just emails or saves whatever json it receives
      const payload = {
        name: formData.recruiterName,
        email: formData.companyEmail,
        whatsapp: formData.whatsapp,
        projectType: formData.opportunityType,
        formType: formData.formType,
        message: formData.message
      };

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedData({ ...formData });
        setStatus({ loading: false, error: null, success: true });
        setFormData({ recruiterName: '', companyEmail: '', whatsapp: '', opportunityType: 'Full-Time Engineering Role', formType: 'Opportunity', message: '' });
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
      <CheckCircle2 size={64} className="text-emerald mb-2" />
      <h3 className="text-2xl font-heading font-bold text-white tracking-tight">Transmission Received</h3>
      <p className="text-primary/40 font-mono text-[10px] max-w-sm uppercase tracking-widest">
        Opportunity securely transmitted. I will review the role details and contact you shortly.
      </p>

      <div className="pt-4">
        <a 
          href={`https://wa.me/919034461378?text=${encodeURIComponent(`Hi Prachi, I just submitted a professional ${submittedData?.formType} on your portfolio! \n\nRecruiter: ${submittedData?.recruiterName} \nCompany: ${submittedData?.companyEmail} \nRole: ${submittedData?.opportunityType} \nDetails: ${submittedData?.message}`)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold rounded-full transition-all text-[10px] uppercase tracking-widest shadow-lg shadow-green-500/20"
        >
          Also Send via WhatsApp
        </a>
      </div>
    </motion.div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label htmlFor="recruiterName" className="text-[10px] font-mono text-primary/20 uppercase tracking-[0.2em] block ml-1">Recruiter / Point of Contact</label>
          <input
            type="text"
            id="recruiterName"
            name="recruiterName"
            value={formData.recruiterName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full bg-background border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-primary/10 focus:outline-none focus:border-cobalt/40 focus:ring-1 focus:ring-cobalt/20 transition-all font-mono text-sm shadow-inner"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="companyEmail" className="text-[10px] font-mono text-primary/20 uppercase tracking-[0.2em] block ml-1">Company Email</label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            required
            placeholder="recruiter@company.com"
            className="w-full bg-background border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-primary/10 focus:outline-none focus:border-cobalt/40 focus:ring-1 focus:ring-cobalt/20 transition-all font-mono text-sm shadow-inner"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-mono text-primary/40 mb-2 uppercase tracking-widest">WhatsApp Number (Optional)</label>
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-white focus:outline-none focus:border-emerald-500/30 transition-colors text-[11px]"
          placeholder="+1 234 567 890"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="opportunityType" className="text-[10px] font-mono text-primary/20 uppercase tracking-[0.2em] block ml-1">Opportunity Classification</label>
        <select
          id="opportunityType"
          name="opportunityType"
          value={formData.opportunityType}
          onChange={handleChange}
          className="w-full bg-background border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cobalt/40 focus:ring-1 focus:ring-cobalt/20 transition-all font-mono text-sm appearance-none cursor-pointer shadow-inner"
          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23334155' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
        >
          <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
          <option value="Internship / Co-op">Internship / Co-op</option>
          <option value="Contract / Freelance">Contract / Freelance</option>
          <option value="Machine Learning / AI Position">Machine Learning / AI Position</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="text-[10px] font-mono text-primary/20 uppercase tracking-[0.2em] block ml-1">Role Description & Links</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          placeholder="Please drop in the JD link, company details, or expectations here..."
          className="w-full bg-background border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-primary/10 focus:outline-none focus:border-cobalt/40 focus:ring-1 focus:ring-cobalt/20 transition-all font-mono text-sm resize-none custom-scrollbar shadow-inner"
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
        className="w-full py-5 bg-white hover:bg-zinc-200 text-black font-heading font-bold rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-2xl shadow-white/5 uppercase tracking-widest text-sm"
      >
        {status.loading ? 'Transmitting...' : 'Initiate Request'}
        {!status.loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
      </button>
    </form>
  );
};

export default OpportunityForm;
