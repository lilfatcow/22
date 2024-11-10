import React, { Suspense } from 'react';
import { 
  PayableList, 
  ReceivableList,
  CounterpartList,
  ProductList 
} from '@monite/sdk-react';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSection } from './DashboardSection';
import { LoadingSpinner } from './LoadingSpinner';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardSection 
              title="Payables" 
              description="Manage your bills and expenses"
            >
              <PayableList />
            </DashboardSection>

            <DashboardSection 
              title="Receivables" 
              description="Track invoices and payments"
            >
              <ReceivableList />
            </DashboardSection>

            <DashboardSection 
              title="Counterparts" 
              description="Manage vendors and customers"
            >
              <CounterpartList />
            </DashboardSection>

            <DashboardSection 
              title="Products" 
              description="Manage your product catalog"
            >
              <ProductList />
            </DashboardSection>
          </Suspense>
        </div>
      </main>
    </div>
  );
}