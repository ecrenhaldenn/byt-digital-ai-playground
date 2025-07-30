import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LocationMap from '@/components/features/LocationMap';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adres",
      content: "Maslak Mahallesi, Büyükdere Caddesi No:123\nŞişli/İstanbul 34398"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      content: "+90 212 555 0123\n+90 532 555 0123"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-posta",
      content: "info@bytdigital.com\ndestek@bytdigital.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 09:00 - 15:00"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            İletişim & Yardım
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya iş birliği teklifleriniz için bizimle iletişime geçin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl">Bize Mesaj Gönderin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ad Soyad</label>
                    <Input placeholder="Adınız ve soyadınız" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">E-posta</label>
                    <Input type="email" placeholder="ornek@email.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Telefon</label>
                    <Input placeholder="+90 5XX XXX XX XX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Şirket</label>
                    <Input placeholder="Şirket adı (opsiyonel)" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Konu</label>
                  <select className="w-full p-3 border border-border rounded-md bg-background">
                    <option>Genel Bilgi</option>
                    <option>Ürün Desteği</option>
                    <option>Satış ve Fiyatlandırma</option>
                    <option>Teknik Destek</option>
                    <option>İş Birliği</option>
                    <option>Kariyer</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mesajınız</label>
                  <Textarea 
                    placeholder="Mesajınızı buraya yazın..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button variant="gradient" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Mesaj Gönder
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Mesajınızı göndererek <span className="text-accent">KVKK</span> ve <span className="text-accent">Gizlilik Politikası</span>'nı kabul etmiş olursunuz.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{info.title}</h3>
                          <p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <LocationMap />
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm">Hemen Ara</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm">WhatsApp</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center p-8 bg-gradient-hero rounded-2xl shadow-glow"
        >
          <h3 className="text-xl font-bold text-primary-foreground mb-2">
            7/24 Canlı Destek
          </h3>
          <p className="text-primary-foreground/80 mb-4">
            Acil durumlar için 7/24 canlı destek hattımızdan bize ulaşabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Canlı Desteği Başlat
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Destek Dokümantasyonu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;