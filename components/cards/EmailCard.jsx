export default function EmailCard({ children, className = '' }) {
  return <div className={`bg-white border rounded-md shadow-sm ${className}`}>{children}</div>;
}
