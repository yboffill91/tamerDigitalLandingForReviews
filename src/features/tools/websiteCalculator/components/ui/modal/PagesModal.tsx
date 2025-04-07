'use client';
import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../..';

const PagesModal = () => {
  const [showComplexityWarning, setShowComplexityWarning] = useState(false);
  return (
    <Dialog
      open={showComplexityWarning}
      onOpenChange={setShowComplexityWarning}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Complexity Level</DialogTitle>
          <DialogDescription>
            Please select a complexity level for this page type before adding
            pages.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 justify-end mt-4">
          <Button
            variant="outline"
            onClick={() => setShowComplexityWarning(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PagesModal;
