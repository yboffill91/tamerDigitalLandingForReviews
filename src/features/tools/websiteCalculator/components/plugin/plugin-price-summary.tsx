interface PluginPriceSummaryProps {
  title: string;
  price: number;
  description: string;
}

export function PluginPriceSummary({
  title,
  price,
  description,
}: PluginPriceSummaryProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-ring/10 border-primary rounded-lg p-6">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary-foreground">
        ${price.toFixed(2)}
      </p>
      <p className="text-sm text-primary/60 mt-2">{description}</p>
    </div>
  );
}
