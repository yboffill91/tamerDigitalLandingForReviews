import type React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`${className}`}>{children}</div>
);

export const CardHeader: React.FC<CardProps> = ({
  children,
  className = '',
}) => <div className={`mb-4 ${className}`}>{children}</div>;

export const CardTitle: React.FC<CardProps> = ({
  children,
  className = '',
}) => <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;

export const CardContent: React.FC<CardProps> = ({
  children,
  className = '',
}) => <div className={className}>{children}</div>;
