import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Clear success alert after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 rounded-xl bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-sm font-medium flex items-center justify-between shadow-lg"
          >
            <span>Message sent successfully! I will get back to you soon.</span>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-emerald-300 hover:text-white font-bold ml-4"
              aria-label="Close alert"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h2 className="text-3xl font-bold tracking-wide relative inline-block text-white">
            Send Message
            <span className="absolute bottom-[-6px] left-0 w-16 h-1 bg-primary dark:bg-primaryDark rounded-full"></span>
          </h2>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Have any questions or want to collaborate? Reach out by filling out the form below.
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 text-sm text-white placeholder-white/40 bg-white/10 border border-white/15 rounded-xl focus:outline-none focus:border-primary dark:focus:border-primaryDark focus:ring-1 focus:ring-primary/50 focus:bg-white/15 transition-all duration-300"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 text-sm text-white placeholder-white/40 bg-white/10 border border-white/15 rounded-xl focus:outline-none focus:border-primary dark:focus:border-primaryDark focus:ring-1 focus:ring-primary/50 focus:bg-white/15 transition-all duration-300"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3.5 text-sm text-white placeholder-white/40 bg-white/10 border border-white/15 rounded-xl focus:outline-none focus:border-primary dark:focus:border-primaryDark focus:ring-1 focus:ring-primary/50 focus:bg-white/15 transition-all duration-300 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 text-sm font-bold text-dark bg-white hover:bg-primary dark:hover:bg-primaryDark hover:text-white rounded-xl uppercase tracking-wider transition-all duration-300 border-2 border-solid border-transparent shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;