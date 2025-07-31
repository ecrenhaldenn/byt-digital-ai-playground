import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from '@/components/layout/Header';
import { ArrowRight, Database, Zap, Shield, Globe, Layers, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductOktopus = () => {
  const [activeERP, setActiveERP] = useState(0);

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Merkezi Veri Yönetimi",
      description: "Tüm veri kaynaklarınızı tek merkezden yönetin. Gerçek zamanlı senkronizasyon ve backup."
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "API Entegrasyonu",
      description: "RESTful API'ler ile mevcut sistemlerinizi sorunsuz entegre edin. 500+ hazır connector."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modüler Yapı",
      description: "İhtiyacınıza göre modül ekleyin veya çıkarın. Ölçeklenebilir ve esnek mimari."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Gerçek Zamanlı Sync",
      description: "Tüm sistemler arasında anlık veri senkronizasyonu. Zero-latency data flow."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Güvenlik & Uyumluluk",
      description: "SOC 2, ISO 27001 uyumlu güvenlik. End-to-end şifreleme ve audit log."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cloud-Native",
      description: "Bulut tabanlı altyapı ile otomatik ölçekleme ve yüksek erişilebilirlik."
    }
  ];

  const erpSystems = [
    { name: "SAP", color: "from-blue-500 to-blue-700", position: { x: 20, y: 10 } },
    { name: "Oracle", color: "from-red-500 to-red-700", position: { x: 80, y: 20 } },
    { name: "Microsoft Dynamics", color: "from-green-500 to-green-700", position: { x: 10, y: 60 } },
    { name: "Salesforce", color: "from-purple-500 to-purple-700", position: { x: 85, y: 70 } },
    { name: "NetSuite", color: "from-yellow-500 to-yellow-700", position: { x: 50, y: 85 } },
    { name: "QuickBooks", color: "from-indigo-500 to-indigo-700", position: { x: 60, y: 15 } },
    { name: "Sage", color: "from-pink-500 to-pink-700", position: { x: 25, y: 80 } },
    { name: "Epicor", color: "from-teal-500 to-teal-700", position: { x: 75, y: 45 } }
  ];

  const benefits = [
    {
      title: "Tek Görünüm",
      description: "Tüm iş verilerinizi tek dashboard'da görüntüleyin. 360 derece işletme perspektifi.",
      icon: "👁️"
    },
    {
      title: "Veri Tutarlılığı",
      description: "Sistemler arası veri çelişkilerini ortadan kaldırın. Single source of truth.",
      icon: "🎯"
    },
    {
      title: "Maliyet Optimizasyonu",
      description: "Birden fazla entegrasyon maliyeti yerine tek platform. %60'a varan tasarruf.",
      icon: "💰"
    },
    {
      title: "Hızlı Deployment",
      description: "Plug-and-play modüller ile hızlı kurulum. Günler değil, saatler içinde aktif.",
      icon: "⚡"
    }
  ];

  const testimonials = [
    {
      name: "Emre Kılıç",
      role: "CTO, ManufactureTech",
      content: "OKTOPUS sayesinde 8 farklı sistemimizi tek platformda birleştirdik. Veri akışımız %85 hızlandı.",
      rating: 5
    },
    {
      name: "Selin Özdemir",
      role: "IT Direktörü, GlobalTrade Ltd",
      content: "Modüler yapısı sayesinde ihtiyacımıza göre sistem geliştiriyoruz. Esneklik ve performans mükemmel.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4">
                Data Integration Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                OKTOPUS
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ahtapot temalı veri merkezi ile tüm ERP sistemlerinizi tek platformda birleştirin. 
                API bazlı modüler yapı ile sınırsız entegrasyon imkanı.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Keşfetmeye Başlayın
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/#contact">
                  <Button variant="outline" size="lg">
                    Demo İsteyin
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <span>✓ 500+ hazır entegrasyon</span>
                <span>✓ Modüler yapı</span>
                <span>✓ Gerçek zamanlı sync</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Animated Octopus Visualization */}
              <div className="relative w-full h-96 bg-gradient-subtle rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20">
                  {/* Octopus Body */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                      <span className="text-primary-foreground font-bold text-lg">🐙</span>
                    </div>
                  </motion.div>

                  {/* ERP System Nodes */}
                  {erpSystems.map((erp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        delay: index * 0.2,
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      style={{
                        position: 'absolute',
                        left: `${erp.position.x}%`,
                        top: `${erp.position.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className="cursor-pointer"
                      onHoverStart={() => setActiveERP(index)}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${erp.color} rounded-lg flex items-center justify-center shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-110`}>
                        <span className="text-white font-bold text-xs">{erp.name.slice(0, 3)}</span>
                      </div>
                      
                      {/* Connecting Lines */}
                      <svg 
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ 
                          left: `${50 - erp.position.x}%`,
                          top: `${50 - erp.position.y}%`,
                          width: '400px',
                          height: '400px'
                        }}
                      >
                        <motion.path
                          d={`M ${erp.position.x * 4} ${erp.position.y * 4} Q 200 200 200 200`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ delay: index * 0.3, duration: 1.5 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--accent))" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  ))}

                  {/* Active ERP Info */}
                  <motion.div
                    key={activeERP}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-border"
                  >
                    <p className="text-sm font-medium">{erpSystems[activeERP]?.name}</p>
                    <p className="text-xs text-muted-foreground">Entegrasyon Aktif</p>
                  </motion.div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Platform Özellikleri
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              OKTOPUS'un güçlü özelliklerini keşfedin ve veri entegrasyon süreçlerinizi 
              nasıl devrim niteliğinde dönüştürebileceğini görün.
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
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              İş Değeri
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              OKTOPUS ile işletmenizin elde edeceği somut faydalar ve rekabet avantajları.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
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
                      <span className="text-4xl">{benefit.icon}</span>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Platform Arayüzü
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
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">🐙</span>
                      </div>
                      <p className="font-medium">Kontrol Paneli {index}</p>
                      <p className="text-sm text-muted-foreground">OKTOPUS Interface</p>
                    </div>
                  </div>
                </AspectRatio>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Müşteri Deneyimleri
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
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">
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
      <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              OKTOPUS ile Entegrasyonu Başlatın
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Veri siloları arasındaki duvarları yıkın. Tüm sistemlerinizi tek platformda birleştirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Ücretsiz Demo İsteyin
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Uzmanla Görüşün
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductOktopus;