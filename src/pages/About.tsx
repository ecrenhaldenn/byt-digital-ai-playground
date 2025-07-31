import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from '@/components/layout/Header';
import { ArrowRight, Target, Users, Lightbulb, Globe, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "İnovasyon",
      description: "Sürekli araştırma ve geliştirme ile teknolojinin sınırlarını zorluyoruz. Her projede yenilikçi çözümler üretiyoruz."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin başarısı bizim başarımızdır. Onların hedeflerine ulaşması için en iyi çözümleri sunuyoruz."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Kalite",
      description: "Yüksek standartlarda hizmet sunmak ve mükemmeliyeti hedeflemek temel prensibimizdir."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sürdürülebilirlik",
      description: "Gelecek nesillere daha iyi bir dünya bırakmak için çevre dostu teknolojiler geliştiriyoruz."
    }
  ];

  const team = [
    {
      name: "Ahmet Kaya",
      role: "Kurucu & CEO",
      description: "15+ yıl teknoloji sektöründe deneyim. AI ve no-code teknolojilerinde uzman.",
      image: "AK"
    },
    {
      name: "Elif Özkan",
      role: "CTO",
      description: "Full-stack geliştirici ve sistem mimarı. Ölçeklenebilir teknoloji altyapıları uzmanı.",
      image: "EÖ"
    },
    {
      name: "Mehmet Demir",
      role: "Ürün Müdürü",
      description: "UX/UI tasarım ve ürün stratejisi uzmanı. Kullanıcı deneyimi odaklı çözümler geliştiriyor.",
      image: "MD"
    },
    {
      name: "Zeynep Yılmaz",
      role: "İş Geliştirme Müdürü",
      description: "Strateji ve iş geliştirme alanında uzman. Müşteri ilişkileri ve pazar analizi konularında deneyimli.",
      image: "ZY"
    }
  ];

  const stats = [
    { number: "50+", label: "Başarılı Proje" },
    { number: "25+", label: "Mutlu Müşteri" },
    { number: "3", label: "Yıllık Deneyim" },
    { number: "15+", label: "Takım Üyesi" }
  ];

  const achievements = [
    {
      year: "2024",
      title: "En İnovatif Startup Ödülü",
      description: "TechStar 2024 yarışmasında birinci oldu."
    },
    {
      year: "2023",
      title: "Seri A Yatırım",
      description: "5M$ değerlemede başarılı yatırım aldı."
    },
    {
      year: "2022",
      title: "İlk Ürün Lansmanı",
      description: "RIVER no-code platformu piyasaya sürüldü."
    },
    {
      year: "2021",
      title: "Şirket Kuruluşu",
      description: "BYT Digital İzmir'de kuruldu."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              Hakkımızda
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Geleceği Bugünden İnşa Ediyoruz
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              BYT Digital, yapay zekâ destekli çözümler ve no-code teknolojilerle 
              işletmelerin dijital dönüşümünü hızlandıran yenilikçi bir teknoloji şirketidir. 
              2021'den beri Türkiye'nin teknoloji ekosisteminde öncü rol oynuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="group">
                  İletişime Geçin
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/#products">
                <Button variant="outline" size="lg">
                  Ürünlerimizi Keşfedin
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Misyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    İşletmelerin teknolojik dönüşümünü hızlandırmak ve herkesin 
                    kod yazmadan güçlü dijital çözümler üretebileceği bir dünya yaratmak. 
                    Yapay zeka ve no-code teknolojileri demokratikleştirerek, 
                    inovasyonu herkesin erişebileceği hale getiriyoruz.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Vizyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    2030 yılına kadar Türkiye'nin önde gelen teknoloji şirketi olmak ve 
                    global pazarda tanınan bir marka haline gelmek. No-code devriminde 
                    öncü rol oynayarak, dijital çözümleri daha erişilebilir, 
                    daha hızlı ve daha etkili hale getirmek.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Değerlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerler ve prensipler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Takımımız
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deneyimli ve tutkulu takımımızla birlikte geleceğin teknolojilerini bugünden inşa ediyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-xl">
                        {member.image}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Başarı Hikayemiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kuruluşumuzdan bugüne kadar kat ettiğimiz yol ve elde ettiğimiz başarılar.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{achievement.year}</Badge>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
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
              Birlikte Geleceği İnşa Edelim
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dijital dönüşüm yolculuğunuzda yanınızda olmak ve projelerinizi hayata geçirmek için buradayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="group">
                  Projeni Başlat
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/#career">
                <Button variant="outline" size="lg">
                  Takıma Katıl
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;