import React from 'react';
import { Layout } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-3 text-2xl font-semibold text-gray-900">
              Financial Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Monite SDK Integration</span>
          </div>
        </div>
      </div>
    </header>
  );
}