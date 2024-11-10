import * as React from 'react';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
}

export const Alert = ({ children, className }: AlertProps) => {
  return (
    <div className={`p-4 rounded-lg border border-yellow-400 bg-yellow-100 text-yellow-700 ${className}`}>
      {children}
    </div>
  );
};

interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const AlertDescription = ({ children, className }: AlertDescriptionProps) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};
