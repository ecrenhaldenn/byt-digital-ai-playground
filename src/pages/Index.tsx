import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import ChatBot from '@/components/features/ChatBot';
import BlogSection from '@/components/sections/BlogSection';
import NewsSection from '@/components/sections/NewsSection';
import FAQSection from '@/components/sections/FAQSection';
import CareerSection from '@/components/sections/CareerSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    // Force dark mode only
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        
        {/* About Section Placeholder */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Hakkımızda
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                BYT Digital, yapay zekâ destekli çözümler, no-code teknolojiler ve gelişmiş veri entegrasyonlarıyla 
                işletmelerin dijital dönüşümünü hızlandıran yenilikçi bir teknoloji girişimidir.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section Placeholder */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-secondary bg-clip-text text-transparent">
                Ürünler & Hizmetler
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card p-8 rounded-2xl shadow-elegant border border-border"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-primary-foreground font-bold text-xl">R</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">RIVER</h3>
                  <p className="text-muted-foreground">
                    No-code platformu; iş akışlarını kolaylaştırır, tüm süreçleri kod yazmadan yönetmenizi sağlar.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card p-8 rounded-2xl shadow-elegant border border-border"
                >
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-secondary-foreground font-bold text-xl">AI</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">CALL-AI CRM</h3>
                  <p className="text-muted-foreground">
                    Yapay zeka destekli çağrı merkezi yazılımı. Müşteri iletişimi, analiz ve otomatik kayıt.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card p-8 rounded-2xl shadow-elegant border border-border"
                >
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <span className="text-primary-foreground font-bold text-xl">O</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">OKTOPUS</h3>
                  <p className="text-muted-foreground">
                    Ahtapot temalı veri merkezi – API bağlantılı, ERP sistemleriyle senkronize çalışan modüler platform.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <BlogSection />
        <NewsSection />
        <CareerSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* AI Chatbot */}
      <ChatBot />
    </motion.div>
  );
};

export default Index;
