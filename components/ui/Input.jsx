export default function Input({
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  type = 'text',
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={`border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
    />
  );
}
