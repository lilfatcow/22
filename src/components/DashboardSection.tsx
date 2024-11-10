import React from 'react';

interface DashboardSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function DashboardSection({ title, description, children }: DashboardSectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="px-6 py-5">
        {children}
      </div>
    </section>
  );
}