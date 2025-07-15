export default function Textarea({ name, value, onChange, placeholder, required = false, className = '' }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
    />
  );
}
