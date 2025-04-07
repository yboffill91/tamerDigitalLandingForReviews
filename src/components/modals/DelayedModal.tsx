'use client';

import { useState, useEffect } from 'react';
import { Modal } from '@/components/modals';
import { useModalContext } from '@/providers/welcomeModalProvider';
import { WelcomeForm } from '@/components';

export function DelayedModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { hasShownModal, setHasShownModal } = useModalContext();

  useEffect(() => {
    if (!hasShownModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShownModal(true);
      }, 10000); // 10 seconds delay

      return () => clearTimeout(timer);
    }
  }, [hasShownModal, setHasShownModal]);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <WelcomeForm />
    </Modal>
  );
}
