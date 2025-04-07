import { List } from 'lucide-react';

interface TableOfContentsProps {
  headings: Array<{ id: string; text: string }>;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
}) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='mb-6 p-6 bg-gradient-to-br from-card/10 to-transparent border-l-4 border-primary border-offset-2 rounded-lg text-foreground'>
      <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
        <List className='h-5 w-5' />
        Table of Contents
      </h3>
      <ul className='space-y-2'>
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className='text-sm text-foreground/70 hover:text-white transition-colors'
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
