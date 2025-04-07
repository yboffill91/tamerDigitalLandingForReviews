import PageElement from './PageElement';

export function OnPageSeoHero() {
  return (
    <div className="relative overflow-hidden py-6 sm:py-8 lg:py-48">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <PageElement />
    </div>
  );
}
