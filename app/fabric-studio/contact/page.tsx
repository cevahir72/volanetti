"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const luxuryEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: luxuryEase }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "9727741001";
    const text = `Hello John,\nMy name is ${formData.fullName},\nEmail: ${formData.email}\n\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-background text-on-background min-h-screen pt-32 pb-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="mb-16"
        >
          <span className="font-label-caps text-secondary tracking-[0.3em] mb-6 block uppercase text-sm">Contact Us</span>
          <h1 className="font-display-lg text-4xl md:text-6xl text-on-background mb-8">Get in Touch</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Discuss your architectural project with our textile experts. 
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div {...fadeUp} className="bg-surface-container-low p-8 md:p-12 rounded-xl hairline-border">
            <form onSubmit={handleWhatsAppSend} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Full Name</label>
                <input 
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text" 
                  className="bg-transparent border-b border-secondary/30 py-2 focus:border-secondary outline-none text-on-surface transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Email Address</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  className="bg-transparent border-b border-secondary/30 py-2 focus:border-secondary outline-none text-on-surface transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="bg-transparent border-b border-secondary/30 py-2 focus:border-secondary outline-none text-on-surface transition-colors resize-none" 
                  placeholder="How can we help?" 
                />
              </div>
              <button 
                type="submit"
                className="bg-[#25D366] text-white font-label-caps py-4 mt-4 hover:brightness-110 transition-all uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-col gap-12 justify-center">
            <div className="flex flex-col gap-4">
              <h3 className="font-headline-md text-secondary">Our Studio</h3>
              <p className="font-body-md text-on-surface-variant">
                3025 Talon Dr.<br />
                Richardson, TX 75082
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-headline-md text-secondary">Business Inquiries</h3>
              <p className="font-body-md text-on-surface-variant">
                john@volanetti.com<br />
                972-774-1001
              </p>
            </div>
            <div className="flex gap-6">
               <span className="material-symbols-outlined text-secondary cursor-pointer hover:opacity-70 transition-opacity">public</span>
               <span className="material-symbols-outlined text-secondary cursor-pointer hover:opacity-70 transition-opacity">mail</span>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
