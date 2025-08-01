import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import ChatbotAnimation from '../animations/ChatbotAnimation';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Merhaba! Size nasıl yardımcı olabilirim?", isBot: true, timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  // Show welcome message on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      const welcomeTimer = setTimeout(() => setShowWelcome(false), 5000);
      return () => clearTimeout(welcomeTimer);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Advanced AI response generator
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Product inquiries
    if (message.includes('river') || message.includes('no-code')) {
      return "RIVER platformu hakkında detaylı bilgi almak için River ürün sayfamızı ziyaret edebilirsiniz. No-code çözümlerimiz iş süreçlerinizi hızlandırır ve kod yazmadan güçlü uygulamalar geliştirmenizi sağlar.";
    }
    
    if (message.includes('call-ai') || message.includes('crm') || message.includes('çağrı merkezi')) {
      return "CALL-AI CRM yapay zeka destekli çağrı merkezi çözümümüzdür. Müşteri hizmetlerinizi otomatikleştirin, ses tanıma teknolojisi ile çağrıları analiz edin ve verimlilik artırın.";
    }
    
    if (message.includes('oktopus') || message.includes('entegrasyon') || message.includes('erp')) {
      return "OKTOPUS platformu ERP sistemlerinizi birleştiren güçlü bir entegrasyon çözümüdür. API bağlantıları ile tüm sistemlerinizi tek merkezden yönetin.";
    }
    
    // Pricing inquiries
    if (message.includes('fiyat') || message.includes('ücret') || message.includes('maliyet')) {
      return "Fiyatlandırma bilgileri için size özel teklif hazırlayabiliriz. İhtiyaçlarınızı değerlendirip en uygun paketi sunmak için demo talep edebilir veya bizimle iletişime geçebilirsiniz.";
    }
    
    // Support inquiries
    if (message.includes('destek') || message.includes('yardım') || message.includes('sorun')) {
      return "7/24 teknik destek ekibimiz sizin için burada! Hemen WhatsApp üzerinden iletişime geçebilir veya destek talebi oluşturabilirsiniz. Sorununuzu çözmek için elimizden geleni yapacağız.";
    }
    
    // Demo requests
    if (message.includes('demo') || message.includes('deneme') || message.includes('test')) {
      return "Ücretsiz demo talep etmek için iletişim formumuzdan bizimle iletişime geçebilirsiniz. Size özel bir demo oturumu ayarlayıp ürünlerimizi tanıtacağız.";
    }
    
    // Company inquiries
    if (message.includes('hakkında') || message.includes('kim') || message.includes('şirket')) {
      return "BYT Digital, yapay zeka ve no-code teknolojileri konusunda uzman bir yazılım firmasıdır. İşletmelerin dijital dönüşümünde yenilikçi çözümler sunuyoruz.";
    }
    
    // Generic helpful responses
    const responses = [
      "Sorularınızı yanıtlamak için buradayım! Ürünlerimiz, hizmetlerimiz veya teknik konularda detaylı bilgi verebilirim.",
      "Size nasıl yardımcı olabilirim? RIVER, CALL-AI CRM ve OKTOPUS ürünlerimiz hakkında bilgi alabilir, demo talep edebilirsiniz.",
      "Merhaba! Dijital çözümlerimiz konusunda sorularınızı yanıtlamaktan mutluluk duyarım. Hangi konuda yardıma ihtiyacınız var?",
      "BYT Digital ailesine hoş geldiniz! Ürünlerimiz ve hizmetlerimiz hakkında merak ettiğiniz her şeyi sorabilirsiniz."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    const userInput = inputValue;
    setInputValue('');

    // Generate intelligent bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(userInput),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Welcome Message Tooltip */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 bg-card border border-border rounded-lg p-4 shadow-elegant max-w-xs"
          >
            <div className="flex items-start space-x-3">
              <ChatbotAnimation size={40} />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Merhaba! 👋
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Size nasıl yardımcı olabilirim?
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-border transform translate-y-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-primary p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ChatbotAnimation size={40} />
                <div>
                  <h3 className="text-primary-foreground font-semibold">BYT Assistant</h3>
                  <p className="text-primary-foreground/80 text-sm">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-end space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    {message.isBot && (
                      <ChatbotAnimation size={24} />
                    )}
                    <div
                      className={`p-3 rounded-2xl ${
                        message.isBot 
                          ? 'bg-muted text-foreground' 
                          : 'bg-gradient-primary text-primary-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button
                  variant="default"
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="premium"
          size="icon"
          className="w-16 h-16 rounded-full shadow-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </>
  );
};

export default ChatBot;