export default function PageTemplate({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`pt-24 pb-16 max-w-4xl mx-auto w-full ${className}`}>
      {children}
    </div>
  );
} 