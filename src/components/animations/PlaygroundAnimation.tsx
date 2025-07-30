import React from 'react';
import Lottie from 'lottie-react';
import playgroundAnimation from '@/assets/playground-animation.json';

interface PlaygroundAnimationProps {
  className?: string;
  size?: number;
}

const PlaygroundAnimation: React.FC<PlaygroundAnimationProps> = ({ 
  className = "", 
  size = 400 
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Lottie
        animationData={playgroundAnimation}
        loop
        autoplay
        style={{ width: size, height: size }}
        className="animate-float"
      />
    </div>
  );
};

export default PlaygroundAnimation;