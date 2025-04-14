interface PluginFeatureListProps {
  features: string[]
  color?: "green" | "blue"
}

export function PluginFeatureList({ features, color = "green" }: PluginFeatureListProps) {
  const dotColor = color === "green" ? "bg-green-500" : "bg-blue-500"

  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-sm">
          <div className={`w-1.5 h-1.5 ${dotColor} rounded-full`} />
          {feature}
        </li>
      ))}
    </ul>
  )
}

