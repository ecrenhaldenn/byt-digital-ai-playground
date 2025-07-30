import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "No-Code Devrimi: İşletmeler Nasıl Dönüşüyor?",
      excerpt: "No-code platformları ile işletmelerin dijital dönüşüm süreçlerini nasıl hızlandırdığını ve maliyetleri nasıl düşürdüğünü keşfedin.",
      author: "Ahmet Yılmaz",
      date: "15 Ocak 2025",
      readTime: "5 dk",
      category: "No-Code",
      image: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "Yapay Zeka ile CRM Sistemlerinin Geleceği",
      excerpt: "AI destekli CRM sistemleri müşteri deneyimini nasıl değiştiriyor? CALL-AI CRM'in sunduğu yenilikçi özellikler.",
      author: "Zeynep Kaya",
      date: "12 Ocak 2025",
      readTime: "7 dk",
      category: "AI",
      image: "🤖"
    },
    {
      id: 3,
      title: "Veri Entegrasyonu: OKTOPUS ile Sorunsuz Bağlantılar",
      excerpt: "ERP sistemleri arasında veri akışını optimize etmenin yolları ve OKTOPUS platformunun sağladığı avantajlar.",
      author: "Mehmet Özkan",
      date: "8 Ocak 2025",
      readTime: "6 dk",
      category: "Integration",
      image: "🐙"
    },
    {
      id: 4,
      title: "2025 Teknoloji Trendleri: Bizim Perspektifimiz",
      excerpt: "Bu yıl teknoloji dünyasını şekillendirecek trendler ve BYT Digital'in bu trendlere yaklaşımı.",
      author: "Seda Tunç",
      date: "5 Ocak 2025",
      readTime: "8 dk",
      category: "Trends",
      image: "📈"
    }
  ];

  const categoryColors = {
    "No-Code": "bg-gradient-primary",
    "AI": "bg-gradient-secondary", 
    "Integration": "bg-accent",
    "Trends": "bg-gradient-hero"
  };

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
            Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teknoloji dünyasından en güncel yazılar, insights ve BYT Digital ekibinin deneyimleri.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {blogPosts.filter(post => post.featured).map(post => (
              <Card key={post.id} className="group hover:shadow-glow transition-all duration-300 border-border/50 overflow-hidden">
                <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`${categoryColors[post.category as keyof typeof categoryColors]} text-white`}>
                      {post.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="group/btn">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Other Posts */}
          <div className="space-y-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
              >
                <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{post.image}</span>
                      <Badge className={`${categoryColors[post.category as keyof typeof categoryColors]} text-white text-xs`}>
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="gradient" size="lg">
            Tüm Blog Yazılarını Görüntüle
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
