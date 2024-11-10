import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="flex items-center gap-2 text-red-600 p-4 bg-red-50 rounded-lg">
      <AlertCircle className="h-5 w-5" />
      <span>{message}</span>
    </div>
  );
}