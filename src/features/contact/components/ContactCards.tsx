'use client';
import type React from 'react';
import { contactCards } from '@/features/contact/utils';
import { GridCard, GridCardSet } from '@/components/ui';

export function ContactCards() {
  return (
    <div className='py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className={`max-w-4xl mx-auto`}>
          <GridCardSet>
            {contactCards.map(
              ({ icon, title, description, contact }, index) => (
                <GridCard
                  icon={icon}
                  title={title}
                  description={description}
                  cta={contact}
                  index={index}
                  key={title + index}
                ></GridCard>
              )
            )}
          </GridCardSet>
        </div>
      </div>
    </div>
  );
}

