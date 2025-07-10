import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = false,
  onClick
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden',
        hoverable && 'hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};