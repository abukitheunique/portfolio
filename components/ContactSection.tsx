"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTelegram,
  FaPaperPlane,
  FaCheck,
  FaSpinner,
  FaExclamationTriangle
} from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _replyto?: string; // For Formspree
  _subject?: string; // For Formspree
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Your Formspree URL
  const FORMSPREE_URL = "https://formspree.io/f/mojjerqp";

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "abubekerassefayesuf@gmail.com",
      link: "mailto:abubekerassefayesuf@gmail.com",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+251 943101360",
      link: "tel:+251943101360",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "https://www.google.com/maps/place/Addis+Ababa,+Ethiopia",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/abukitheunique",
      color: "hover:text-white bg-gray-800",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abukitheunique",
      color: "hover:text-blue-400 bg-blue-700",
    },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      href: "https://t.me/abukitheunique",
      color: "hover:text-blue-300 bg-blue-600",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:abubekerassefayesuf@gmail.com",
      color: "hover:text-red-300 bg-red-600",
    },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Prepare data for Formspree
      const formDataForSubmission = new FormData();
      formDataForSubmission.append('name', formData.name);
      formDataForSubmission.append('email', formData.email);
      formDataForSubmission.append('subject', formData.subject);
      formDataForSubmission.append('message', formData.message);
      formDataForSubmission.append('_replyto', formData.email); // For Formspree reply-to
      formDataForSubmission.append('_subject', `New message from ${formData.name}: ${formData.subject}`); // Email subject

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formDataForSubmission,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen py-24 px-4 md:px-8 bg-gradient-to-b from-[#020617] via-[#0a1a3c] to-[#020617] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
             backgroundSize: '40px 40px',
           }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Build</span>{" "}
            Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Awesome</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <div className="relative bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <FaPaperPlane className="text-2xl text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      minLength={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl"
                    >
                      <div className="flex items-center gap-3 text-red-400">
                        <FaExclamationTriangle />
                        <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                      </div>
                    </motion.div>
                  )}
                  
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl"
                    >
                      <div className="flex items-center gap-3 text-green-400">
                        <FaCheck />
                        <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                      </div>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      status === 'success'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                        : status === 'error'
                        ? 'bg-gradient-to-r from-red-600 to-orange-600'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <FaCheck />
                        Message Sent!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <FaExclamationTriangle />
                        Try Again
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm text-center">
                    * Required fields. I typically respond within 24 hours. For urgent inquiries, 
                    please mention "URGENT" in your subject line.
                  </p>
                  <p className="text-gray-500 text-xs text-center mt-2">
                    Messages are sent directly to my email via Formspree.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Whether you have a question, want to collaborate, or just want to say hi,
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`block p-6 rounded-2xl bg-gradient-to-br ${info.color} backdrop-blur-sm border ${info.borderColor} hover:border-white/30 transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect on Social Media
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-4 rounded-xl ${social.color} text-white text-xl transition-all duration-300 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for work</span>
                </div>
                <span className="text-blue-400 font-bold">✓</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently open to new projects, collaborations, and full-time opportunities.
                Let's schedule a call to discuss how I can help you!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
            <p className="text-gray-300 mb-4">
              Have a quick question? I'm just a message away!
            </p>
            <a
              href="mailto:abubekerassefayesuf@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <FaEnvelope />
              Send Quick Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}