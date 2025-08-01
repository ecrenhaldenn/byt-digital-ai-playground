import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import PlaygroundAnimation from '../animations/PlaygroundAnimation';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-accent/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Yapay Zeka Destekli Çözümler</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block">Geleceği</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kodlamadan İnşa Edin
              </span>
              <div className="flex items-center justify-center lg:justify-start mt-2">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-accent mr-3" />
                <span className="text-2xl md:text-3xl lg:text-4xl">
                  Yapay Zeka ile Dönüşüm Zamanı
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              BYT Digital ile no-code çözümler, veri entegrasyonu ve akıllı teknolojiler bir arada. 
              İşletmenizin dijital dönüşümünü hızlandırın, verimliliği artırın.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="/about">
                <Button 
                  variant="hero" 
                  size="xl"
                  className="group"
                >
                  BYT Digital'i Keşfedin
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a href="#contact">
                <Button 
                  variant="glass" 
                  size="xl"
                  className="group"
                >
                  Ücretsiz Danışmanlık Alın
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5"
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-border/20"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Destek Hizmeti</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 0.98, 1] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <PlaygroundAnimation size={500} className="drop-shadow-2xl" />
              </motion.div>
              
              {/* Floating elements around animation */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-16 h-16 bg-gradient-primary rounded-full opacity-20 blur-sm"
              />
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-secondary rounded-full opacity-30 blur-sm"
              />
              
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 right-0 w-8 h-8 bg-accent rounded-full opacity-40 blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;