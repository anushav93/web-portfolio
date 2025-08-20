import { ReactNode } from 'react';

export default function PageTemplate({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`pt-24 pb-16 max-w-4xl mx-auto w-full ${className}`}>
      {children}
    </div>
  );
} 