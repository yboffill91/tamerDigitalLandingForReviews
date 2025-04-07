'use client';
import { faqs } from '@/features/services/socialMedia/utils';
import { LeadingSection } from '@/features/services/components';
import { FaQuestion } from 'react-icons/fa';

export function Faqs() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='container mx-auto px-4'>
        <LeadingSection
          badgeText=' Common Questions from the Community'
          heading='Things 💡 you probably
            wonder'
          description=''
          icon={FaQuestion}
        />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-4 p-4 '>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg border border-background-primary hover:border-ring/90 transition-all duration-700 hover:bg-ring/5 hover:scale-105 ease-in-out p-4 `}
            >
              <h3 className='mb-4 text-primary'>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
