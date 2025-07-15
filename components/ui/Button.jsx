export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  size = 'md',
  className = '',
}) {
  const base = 'rounded px-4 py-2 font-medium transition-colors';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  };
  const sizes = {
    sm: 'text-sm px-2 py-1',
    md: '',
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}
