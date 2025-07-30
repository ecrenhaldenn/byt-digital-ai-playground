import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import ChatBot from '@/components/features/ChatBot';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    const darkMode = localStorage.getItem('darkMode') === 'true' || 
                    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
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

        {/* Additional sections can be added here */}
        <section id="career" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Kariyer</h2>
            <p className="text-lg text-muted-foreground">Gelecek burada başlıyor...</p>
          </div>
        </section>

        <section id="news" className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Haberler</h2>
            <p className="text-lg text-muted-foreground">AI ve no-code dünyasından haberler...</p>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Sık Sorulan Sorular</h2>
            <p className="text-lg text-muted-foreground">Merak ettikleriniz...</p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">İletişim</h2>
            <p className="text-lg text-muted-foreground">Bize ulaşın...</p>
          </div>
        </section>
      </main>

      {/* AI Chatbot */}
      <ChatBot />
    </motion.div>
  );
};

export default Index;
