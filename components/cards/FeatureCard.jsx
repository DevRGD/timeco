export default function FeatureCard({ icon, title, features = [] }) {
  return (
    <div className="rounded-sm bg-background shadow-sm p-6 space-y-4 text-center border border-border transition hover:shadow-md">
      <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full border-4 border-border text-accent-foreground text-xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-left">{title}</h3>
      <ul className="space-y-1 text-sm text-muted-foreground text-left max-w-xs mx-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-stretch gap-2">
            <span className="text-green-600 dark:text-green-400">✅</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
