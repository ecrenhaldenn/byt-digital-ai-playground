import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface ChatbotAnimationProps {
  className?: string;
  size?: number;
}

const ChatbotAnimation: React.FC<ChatbotAnimationProps> = ({ 
  className = "", 
  size = 60 
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <DotLottieReact
        src="https://lottie.host/d0514aac-97a9-42af-8785-44ca4f85f460/g4Wnvzg2aT.lottie"
        loop
        autoplay
        style={{ width: size, height: size }}
        className="animate-pulse"
      />
    </div>
  );
};

export default ChatbotAnimation;