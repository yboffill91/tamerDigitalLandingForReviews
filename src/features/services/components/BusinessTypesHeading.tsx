import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface BusinessTypesHeadingProps {
  text: string;
  index: number;
  icon: LucideIcon | IconType;
}

export const BusinessTypesHeading = ({
  text,
  icon: IconElement,
  index,
}: BusinessTypesHeadingProps) => {
  return (
    <div
      className='flex flex-col ga-4  items-center justify-center mx-4'
      key={text + index}
    >
      <IconElement className='size-8' />
      <p className='text-lg '>{text}</p>
    </div>
  );
};
