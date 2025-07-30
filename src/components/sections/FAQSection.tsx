import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "No-code nedir ve işletmeme nasıl fayda sağlar?",
      answer: "No-code, kod yazmadan yazılım geliştirme sürecidir. İşletmenize hız, maliyet tasarrufu ve esneklik sağlar. Teknik bilgi gerektirmeden iş süreçlerinizi dijitalleştirebilir, otomasyon kurabilir ve verimliliğinizi artırabilirsiniz.",
      category: "No-Code"
    },
    {
      id: "2", 
      question: "RIVER platformu hangi tür işlemleri destekler?",
      answer: "RIVER platformu iş akışı yönetimi, form oluşturma, veri toplama, raporlama, entegrasyon yönetimi ve süreç otomasyonu gibi birçok işlemi destekler. Drag-and-drop arayüzü ile kolayca özelleştirilebilir.",
      category: "Ürünler"
    },
    {
      id: "3",
      question: "AI sistemleriniz ne kadar güvenlidir?",
      answer: "Tüm AI sistemlerimiz KVKK ve GDPR uyumludur. End-to-end şifreleme, düzenli güvenlik denetimleri ve ISO 27001 standartlarına uygun veri koruma protokolleri kullanıyoruz. Verileriniz güvenliğimiz garantisindedir.",
      category: "Güvenlik"
    },
    {
      id: "4",
      question: "CALL-AI CRM sistemi nasıl entegre edilir?",
      answer: "CALL-AI CRM, mevcut sistemlerinizle API entegrasyonu veya plug-and-play modüller ile kolayca entegre edilir. Kurulum süreci ortalama 2-5 iş günü sürer ve teknik destek ekibimiz size rehberlik eder.",
      category: "Entegrasyon"
    },
    {
      id: "5",
      question: "OKTOPUS platformu hangi ERP sistemleriyle çalışır?",
      answer: "OKTOPUS, SAP, Oracle, Microsoft Dynamics, Netsis, Logo, Mikro, Nebim ve 50+ ERP sistemi ile uyumludur. Özel entegrasyon ihtiyaçlarınız için de custom API geliştirme hizmeti sunuyoruz.",
      category: "Ürünler"
    },
    {
      id: "6",
      question: "Destek hizmetleriniz nasıl çalışır?",
      answer: "7/24 teknik destek, online dokümantasyon, video eğitimler ve canlı chat desteği sunuyoruz. Kritik sorunlar için 2 saat içinde yanıt garantisi veriyoruz. Premium müşterilerimize özel account manager atanır.",
      category: "Destek"
    },
    {
      id: "7",
      question: "Fiyatlandırma modeli nasıl çalışır?",
      answer: "Kullanım bazlı esnek fiyatlandırma sunuyoruz. Başlangıç paketleri, büyüme planları ve enterprise çözümler mevcuttur. İlk 30 gün ücretsiz deneme hakkınız var. Özel ihtiyaçlarınız için özelleştirilmiş fiyat teklifleri hazırlıyoruz.",
      category: "Fiyatlandırma"
    },
    {
      id: "8",
      question: "Eğitim ve onboarding süreci nasıl?",
      answer: "Kapsamlı onboarding programımız 1-2 hafta sürer. Canlı eğitimler, interaktif dökümantasyon, pratik örnekler ve mentörlük desteği ile ekibinizin hızla adapte olmasını sağlıyoruz.",
      category: "Eğitim"
    }
  ];

  const categories = ["Tümü", "No-Code", "Ürünler", "Güvenlik", "Entegrasyon", "Destek", "Fiyatlandırma", "Eğitim"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tümü");

  const filteredFAQs = selectedCategory === "Tümü" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const categoryColors = {
    "No-Code": "bg-gradient-primary",
    "Ürünler": "bg-gradient-secondary",
    "Güvenlik": "bg-accent",
    "Entegrasyon": "bg-primary",
    "Destek": "bg-secondary",
    "Fiyatlandırma": "bg-gradient-hero",
    "Eğitim": "bg-accent/80"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Sık Sorulan Sorular
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BYT Digital hizmetleri hakkında merak ettiklerinizin yanıtları.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                  : 'bg-background hover:bg-muted border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={faq.id} 
                  className="bg-background border border-border rounded-2xl px-6 shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-3 w-full">
                      <Badge 
                        className={`${categoryColors[faq.category as keyof typeof categoryColors]} text-white text-xs shrink-0 mt-1`}
                      >
                        {faq.category}
                      </Badge>
                      <span className="font-semibold text-foreground">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-20">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 p-8 bg-gradient-primary rounded-2xl shadow-glow"
        >
          <h3 className="text-xl font-bold text-primary-foreground mb-2">
            Aradığınız soruyu bulamadınız mı?
          </h3>
          <p className="text-primary-foreground/80 mb-4">
            Uzman ekibimizle direkt iletişime geçin, size özel çözümler sunalım.
          </p>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
            Bize Ulaşın
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;