
import React from 'react';
import { SearchCheck } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SearchCheck className="h-6 w-6 text-joblens-primary" />
      <span className="font-bold text-xl">
        Job<span className="text-joblens-primary">Lens</span> MIT
      </span>
    </div>
  );
};

export default Logo;
