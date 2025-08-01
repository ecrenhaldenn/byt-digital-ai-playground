import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from '@/components/layout/Header';
import { ArrowRight, Phone, Brain, BarChart3, Users, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCallAI = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Yapay Zeka Asistanı",
      description: "Gelişmiş NLP teknolojisi ile müşteri taleplerini anlayan ve uygun yanıtlar veren AI asistan."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Otomatik Çağrı Kayıtları",
      description: "Tüm görüşmeler otomatik olarak kaydedilir ve transkript edilir. Arama geçmişi kolayca erişilebilir."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Gelişmiş Analitik",
      description: "Çağrı performansı, müşteri memnuniyeti ve agent verimliliği hakkında detaylı raporlar."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Müşteri Profili",
      description: "360 derece müşteri görünümü ile geçmiş etkileşimler ve tercihler tek ekranda."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Güvenlik & KVKK",
      description: "End-to-end şifreleme ve KVKK uyumlu veri koruma ile müşteri bilgileri güvende."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Çoklu Dil Desteği",
      description: "Türkçe, İngilizce ve diğer dillerde konuşma tanıma ve yanıt verme özelliği."
    }
  ];

  const aiCapabilities = [
    {
      title: "Sentiment Analizi",
      description: "Müşteri ses tonunu analiz ederek memnuniyet seviyesini gerçek zamanlı ölçer.",
      icon: "🎭"
    },
    {
      title: "Otomatik Ticket Oluşturma",
      description: "Çağrı içeriğine göre otomatik olarak destek talepleri oluşturur ve kategorize eder.",
      icon: "🎫"
    },
    {
      title: "Akıllı Yönlendirme",
      description: "Müşteri talebine ve agent uzmanlığına göre en uygun temsilciye yönlendirir.",
      icon: "🧭"
    },
    {
      title: "Tahminsel Analiz",
      description: "Geçmiş verilerle müşteri davranışlarını tahmin eder ve proaktif çözümler sunar.",
      icon: "🔮"
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" },
    { name: "Zendesk", logo: "ZD" },
    { name: "Microsoft Teams", logo: "MT" },
    { name: "WhatsApp Business", logo: "WA" },
    { name: "Slack", logo: "SL" }
  ];

  const testimonials = [
    {
      name: "Mehmet Yılmaz",
      role: "Müşteri Hizmetleri Müdürü, RetailMax",
      content: "CALL-AI CRM sayesinde müşteri memnuniyetimiz %40 arttı. AI asistanı rutinleri hallediyor, ekibimiz önemli konulara odaklanabiliyor.",
      rating: 5
    },
    {
      name: "Ayşe Demir",
      role: "Operasyon Direktörü, TechSupport Pro",
      content: "Çağrı analitikleri sayesinde performansımızı sürekli iyileştiriyoruz. Sistem çok kullanıcı dostu ve etkili.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4">
                AI-Powered CRM
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
                CALL-AI CRM
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Yapay zeka destekli çağrı merkezi yazılımı ile müşteri deneyimini 
                yeni seviyeye taşıyın. Otomatik analiz, akıllı yönlendirme ve 
                gerçek zamanlı raporlama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Hemen Başlayın
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/#contact">
                  <Button variant="outline" size="lg">
                    Demo İsteyin
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <span>✓ Kolay entegrasyon</span>
                <span>✓ 7/24 destek</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <AspectRatio ratio={16/10} className="bg-gradient-subtle rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-24 h-24 mx-auto mb-4 text-secondary" />
                    <p className="text-lg font-medium">CALL-AI Dashboard</p>
                    <p className="text-muted-foreground">Yapay Zeka Destekli CRM</p>
                  </div>
                </div>
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Akıllı Özellikler
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              CALL-AI CRM, yapay zeka teknolojisinin gücünü çağrı merkezi 
              operasyonlarıyla buluşturuyor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Yapay Zeka Yetenekleri
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Gelişmiş AI algoritmaları ile çağrı merkezi operasyonlarınızı optimize edin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{capability.icon}</span>
                      <CardTitle className="text-xl">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots/Visuals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Platform Ekran Görüntüleri
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AspectRatio ratio={16/10} className="bg-gradient-subtle rounded-xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-secondary-foreground font-bold text-xl">AI</span>
                      </div>
                      <p className="font-medium">CRM Ekranı {index}</p>
                      <p className="text-sm text-muted-foreground">CALL-AI Interface</p>
                    </div>
                  </div>
                </AspectRatio>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Müşteri Geri Bildirimleri
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                        <span className="text-secondary-foreground font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              CALL-AI CRM ile Başlayın
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Yapay zeka destekli çağrı merkezi deneyimini bugün keşfedin. 
              Ücretsiz demo ile sistemi test edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Ücretsiz Demo İsteyin
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
                <a href="https://wa.me/905338955389" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    İletişime Geçin
                  </Button>
                </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductCallAI;