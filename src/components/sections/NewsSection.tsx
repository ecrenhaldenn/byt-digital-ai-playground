import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Zap, TrendingUp, Globe } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "BYT Digital, Avrupa'da No-Code Platformları Zirvesi'nde Konuşmacı Oldu",
      excerpt: "CEO'muz Ahmet Yılmaz, Berlin'de düzenlenen zirveye konuşmacı olarak katıldı ve RIVER platformunun başarı hikayesini paylaştı.",
      date: "18 Ocak 2025",
      author: "BYT Digital",
      category: "Şirket Haberleri",
      image: "🎤",
      readTime: "3 dk",
      featured: true
    },
    {
      id: 2,
      title: "OpenAI GPT-4 Turbo Entegrasyonu CALL-AI CRM'e Geldi",
      excerpt: "En gelişmiş dil modeli artık CRM sistemimizde! Müşteri etkileşimleri artık daha akıllı ve etkili.",
      date: "15 Ocak 2025",
      author: "Teknik Ekip",
      category: "Ürün Güncellemeleri",
      image: "🤖",
      readTime: "4 dk"
    },
    {
      id: 3,
      title: "OKTOPUS 2.0: Yeni Nesil Veri Entegrasyonu Platformu Yayında",
      excerpt: "200+ yeni API bağlantısı, gelişmiş dashboard ve real-time analytics ile OKTOPUS platformumuz güncellendi.",
      date: "12 Ocak 2025",
      author: "Ürün Ekibi",
      category: "Ürün Güncellemeleri",
      image: "🐙",
      readTime: "5 dk"
    },
    {
      id: 4,
      title: "2025 No-Code Trend Raporu: AI Entegrasyonu %400 Arttı",
      excerpt: "Sektör analizimize göre, 2024 yılında no-code platformlara AI entegrasyonu dramatik şekilde arttı.",
      date: "10 Ocak 2025",
      author: "Araştırma Ekibi",
      category: "Sektör Analizi",
      image: "📊",
      readTime: "6 dk"
    },
    {
      id: 5,
      title: "BYT Digital, TechCrunch Disrupt 2025'te Startup Sahnesinde",
      excerpt: "San Francisco'da düzenlenecek etkinlikte RIVER platformunu global yatırımcılara tanıtacağız.",
      date: "8 Ocak 2025",
      author: "BYT Digital",
      category: "Etkinlikler",
      image: "🚀",
      readTime: "3 dk"
    },
    {
      id: 6,
      title: "Türkiye'de No-Code Adoption Rate'i %150 Arttı",
      excerpt: "2024 yılında Türk şirketlerinde no-code teknolojileri benimsenme oranı Avrupa ortalamasını geçti.",
      date: "5 Ocak 2025",
      author: "Market Intelligence",
      category: "Sektör Analizi",
      image: "🇹🇷",
      readTime: "4 dk"
    }
  ];

  const categoryColors = {
    "Şirket Haberleri": "bg-gradient-primary",
    "Ürün Güncellemeleri": "bg-gradient-secondary",
    "Sektör Analizi": "bg-accent",
    "Etkinlikler": "bg-primary"
  };

  const categoryIcons = {
    "Şirket Haberleri": <Globe className="w-4 h-4" />,
    "Ürün Güncellemeleri": <Zap className="w-4 h-4" />,
    "Sektör Analizi": <TrendingUp className="w-4 h-4" />,
    "Etkinlikler": <Calendar className="w-4 h-4" />
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Haberler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI ve no-code dünyasından güncel gelişmeler, BYT Digital haberleri ve sektör analizleri.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {newsItems.filter(item => item.featured).map(item => (
              <Card key={item.id} className="group hover:shadow-glow transition-all duration-300 border-border/50 overflow-hidden">
                <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                  {item.image}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`${categoryColors[item.category as keyof typeof categoryColors]} text-white flex items-center gap-1`}>
                      {categoryIcons[item.category as keyof typeof categoryIcons]}
                      {item.category}
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      Öne Çıkan
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {item.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <span>{item.readTime}</span>
                    </div>
                    <button className="text-accent hover:text-accent/80 font-medium flex items-center gap-1 group/btn">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Other News */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Diğer Haberler</h3>
            {newsItems.filter(item => !item.featured).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{item.image}</span>
                      <Badge className={`${categoryColors[item.category as keyof typeof categoryColors]} text-white text-xs flex items-center gap-1`}>
                        {categoryIcons[item.category as keyof typeof categoryIcons]}
                        {item.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>{item.author}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                      <span>{item.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-secondary rounded-2xl shadow-glow"
        >
          <h3 className="text-xl font-bold text-secondary-foreground mb-2">
            Haberlerden Haberdar Olun
          </h3>
          <p className="text-secondary-foreground/80 mb-6">
            En güncel teknoloji haberleri ve BYT Digital gelişmelerini e-postanızda alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Abone Ol
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
