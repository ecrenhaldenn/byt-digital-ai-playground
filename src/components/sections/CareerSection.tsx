import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  featured?: boolean;
}

const CareerSection: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: "Senior No-Code Platform Developer",
      department: "Ürün Geliştirme",
      location: "İstanbul / Hybrid",
      type: "Tam Zamanlı",
      experience: "3-5 yıl",
      description: "RIVER platformunun geliştirilmesi ve optimizasyonunda rol alacak, no-code çözümlerinde öncülük edecek deneyimli geliştirici arıyoruz.",
      requirements: [
        "No-code/low-code platformlarda 3+ yıl deneyim",
        "JavaScript, React, Node.js bilgisi",
        "API entegrasyonu deneyimi",
        "Agile metodolojilerde çalışma tecrübesi"
      ],
      featured: true
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "Yapay Zeka",
      location: "İstanbul / Remote",
      type: "Tam Zamanlı", 
      experience: "4-6 yıl",
      description: "CALL-AI CRM sisteminin AI modellerini geliştirmek ve optimize etmekle sorumlu olacak makine öğrenmesi uzmanı.",
      requirements: [
        "Python, TensorFlow/PyTorch deneyimi",
        "NLP ve speech recognition teknolojileri",
        "Cloud AI servislerinde deneyim",
        "MLOps süreçlerinde bilgi"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Altyapı",
      location: "İstanbul",
      type: "Tam Zamanlı",
      experience: "3-5 yıl",
      description: "OKTOPUS platformunun altyapı yönetimi ve deployment süreçlerinden sorumlu DevOps uzmanı.",
      requirements: [
        "Docker, Kubernetes deneyimi",
        "AWS/Azure cloud platformları",
        "CI/CD pipeline kurulum",
        "Monitoring ve logging sistemleri"
      ]
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Ürün Geliştirme",
      location: "İstanbul / Hybrid",
      type: "Tam Zamanlı",
      experience: "2-4 yıl",
      description: "Modern React uygulamaları geliştiren, kullanıcı deneyimini ön planda tutan frontend geliştirici.",
      requirements: [
        "React, TypeScript, Modern CSS",
        "State management (Redux, Zustand)",
        "Responsive design ve accessibility",
        "Testing framework deneyimi"
      ]
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Ürün Yönetimi",
      location: "İstanbul",
      type: "Tam Zamanlı",
      experience: "5+ yıl",
      description: "Ürün stratejisini belirleyen, road map oluşturan ve geliştirme ekipleriyle koordinasyon sağlayan ürün müdürü.",
      requirements: [
        "Ürün yönetiminde 5+ yıl deneyim",
        "Agile/Scrum metodolojileri",
        "Stakeholder yönetimi",
        "Analitik ve data-driven karar verme"
      ]
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Tasarım",
      location: "İstanbul / Hybrid",
      type: "Tam Zamanlı",
      experience: "2-4 yıl",
      description: "Kullanıcı merkezli tasarım yaklaşımıyla platform arayüzlerini tasarlayan deneyimli UI/UX tasarımcı.",
      requirements: [
        "Figma, Adobe Creative Suite",
        "User research ve usability testing",
        "Design system oluşturma",
        "Frontend geliştirme süreçlerinde işbirliği"
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Kariyer Gelişimi",
      description: "Sürekli öğrenme ve gelişim fırsatları"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dinamik Takım",
      description: "Yenilikçi ve işbirlikçi çalışma ortamı"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Esnek Çalışma",
      description: "Hibrit çalışma modeli ve esnek saatler"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Rekabetçi Maaş",
      description: "Sektör standartlarının üstünde ücret paketi"
    }
  ];

  const departmentColors = {
    "Ürün Geliştirme": "bg-gradient-primary",
    "Yapay Zeka": "bg-gradient-secondary",
    "Altyapı": "bg-accent",
    "Ürün Yönetimi": "bg-primary",
    "Tasarım": "bg-secondary"
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
            Kariyer Fırsatları
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BYT Digital ailesiyle geleceği şekillendirin. Teknoloji dünyasında fark yaratan projelerin parçası olun.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Job Positions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Açık Pozisyonlar</h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className={`group hover:shadow-glow transition-all duration-300 border-border/50 h-full ${job.featured ? 'ring-2 ring-accent' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-2 flex-wrap">
                        <Badge className={`${departmentColors[job.department as keyof typeof departmentColors]} text-white`}>
                          {job.department}
                        </Badge>
                        {job.featured && (
                          <Badge variant="outline" className="border-accent text-accent">
                            Öne Çıkan
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription>
                      {job.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{job.type}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Deneyim: </span>
                          <span className="font-medium">{job.experience}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Aranan Özellikler:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.requirements.slice(0, 3).map((req, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="outline" className="w-full group/btn">
                        Başvur
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-hero rounded-2xl shadow-glow"
        >
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Aradığınız pozisyonu bulamadınız mı?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Yetenekli bireylerle tanışmayı her zaman seviyoruz. CV'nizi gönderin, 
            sizin için uygun bir fırsat çıktığında hemen iletişime geçelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Genel Başvuru Yapın
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              İnsan Kaynakları ile İletişim
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;