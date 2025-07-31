import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from '@/components/layout/Header';
import { ArrowRight, Workflow, Zap, Code, Users, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductRiver = () => {
  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Sürükle-Bırak Editör",
      description: "Karmaşık iş akışlarını görsel olarak tasarlayın. Kod yazmadan güçlü otomasyon sistemleri oluşturun."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hızlı Deployment",
      description: "Projelerinizi saniyeler içinde canlıya alın. Bulut tabanlı altyapı ile sınırsız ölçeklenebilirlik."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Entegrasyonu",
      description: "REST API, GraphQL ve Webhook desteği ile mevcut sistemlerinizi kolayca entegre edin."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Takım Çalışması",
      description: "Gerçek zamanlı işbirliği araçları ile ekibinizle eş zamanlı çalışın."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analitik & Raporlama",
      description: "Detaylı performans metrikleri ve kullanıcı davranış analizleri."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Platform",
      description: "Web, mobil ve desktop uygulamaları tek platformdan yönetin."
    }
  ];

  const useCases = [
    {
      title: "E-ticaret Otomasyonu",
      description: "Sipariş yönetimi, stok takibi ve müşteri bildirimlerini otomatikleştirin.",
      badge: "Popüler"
    },
    {
      title: "CRM Entegrasyonu",
      description: "Müşteri verilerini senkronize edin ve satış süreçlerini optimize edin.",
      badge: "Trend"
    },
    {
      title: "İnsan Kaynakları",
      description: "İşe alım süreçleri, bordro hesaplamaları ve performans takibi.",
      badge: "Yeni"
    },
    {
      title: "Pazarlama Otomasyonu",
      description: "E-posta kampanyaları, sosyal medya paylaşımları ve lead yönetimi.",
      badge: "Pro"
    }
  ];

  const testimonials = [
    {
      name: "Ahmet Kaya",
      role: "CTO, TechStart",
      content: "RIVER sayesinde geliştirme süremizi %70 kısalttık. Artık daha fazla özellik daha hızlı sunabiliyoruz.",
      rating: 5
    },
    {
      name: "Elif Özkan",
      role: "Proje Yöneticisi, DigitalFlow",
      content: "Kod bilmeden karmaşık iş akışları oluşturabilmek harika. Ekibimizin verimliliği arttı.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4">
                No-Code Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                RIVER
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Kod yazmadan güçlü uygulamalar ve iş akışları oluşturun. 
                Sürükle-bırak editörü ile dakikalar içinde karmaşık sistemler tasarlayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://river.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="group">
                    Platformu Göz At
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Link to="/#contact">
                  <Button variant="outline" size="lg">
                    Demo İsteyin
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <span>✓ 14 gün ücretsiz deneme</span>
                <span>✓ Kredi kartı gerektirmez</span>
                <span>✓ Anında kurulum</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <AspectRatio ratio={16/10} className="bg-gradient-subtle rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Workflow className="w-24 h-24 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-medium">RIVER Dashboard</p>
                    <p className="text-muted-foreground">Görsel İş Akışı Editörü</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Güçlü Özellikler
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              RIVER ile no-code geliştirmenin tüm gücünü keşfedin. 
              Profesyonel uygulamalar oluşturmak hiç bu kadar kolay olmamıştı.
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
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Kullanım Alanları
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              RIVER'ın çok yönlü yapısı sayesinde her sektörden işletmeler 
              dijital dönüşümlerini hızlandırıyor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <Badge variant="secondary">{useCase.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {useCase.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Platform Görselleri
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
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">{index}</span>
                      </div>
                      <p className="font-medium">Platform Görsel {index}</p>
                      <p className="text-sm text-muted-foreground">RIVER Interface</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
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
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
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
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              RIVER ile Başlayın
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kod yazmadan güçlü uygulamalar oluşturmaya bugün başlayın. 
              Ücretsiz deneme ile tüm özellikleri keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://river.com.tr/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  Platformu Göz At
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Demo İsteyin
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductRiver;