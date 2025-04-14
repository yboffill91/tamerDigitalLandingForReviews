import type { ReactNode } from 'react';

interface PluginStepLayoutProps {
  priceSummary?: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export function PluginStepLayout({
  priceSummary,
  children,
  footer,
}: PluginStepLayoutProps) {
  return (
    <div>
      {priceSummary && <div className="mb-6">{priceSummary}</div>}

      <div className="grid gap-6">{children}</div>

      <div className="mt-8">{footer}</div>
    </div>
  );
}
