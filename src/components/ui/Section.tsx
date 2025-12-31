import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary';
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  
  const bgColors = {
    white: 'bg-white',
    light: 'bg-muted/30', // Very light gray/warm tint
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
