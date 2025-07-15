export default function Badge({ badge }) {
  if (!badge) return null;

  const colorMap = {
    New: 'bg-green-500 text-white',
    Popular: 'bg-blue-500 text-white',
    Trending: 'bg-pink-500 text-white',
    Sale: 'bg-red-500 text-white',
    Exclusive: 'bg-purple-600 text-white',
  };

  const badgeStyle = colorMap[badge] || 'bg-accent text-accent-foreground';

  return (
    <span className={`absolute top-0 right-0 z-10 rounded-bl-sm px-2 py-0.5 text-xs font-semibold ${badgeStyle}`}>
      {badge}
    </span>
  );
}
