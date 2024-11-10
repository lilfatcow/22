import React from 'react';
import { MoniteProvider } from './components/MoniteProvider';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <MoniteProvider>
      <Dashboard />
    </MoniteProvider>
  );
}

export default App;