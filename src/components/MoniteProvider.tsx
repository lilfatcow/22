import React from 'react';
import { MoniteProvider as BaseMoniteProvider } from '@monite/sdk-react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { MONITE_CONFIG } from '../config/monite';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorDisplay } from './ErrorDisplay';
import { useMoniteInit } from '../hooks/useMoniteInit';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4F46E5',
    },
    background: {
      default: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
  },
});

interface MoniteProviderProps {
  children: React.ReactNode;
}

export function MoniteProvider({ children }: MoniteProviderProps) {
  const { entityId, error, loading } = useMoniteInit();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !entityId) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <ErrorDisplay message={error || 'Failed to initialize Monite'} />
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseMoniteProvider
        apiUrl={MONITE_CONFIG.apiUrl}
        entityId={entityId}
        locale="en"
        theme={theme}
        fetchToken={async () => {
          const response = await fetch(`${MONITE_CONFIG.apiUrl}/auth/token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              grant_type: 'client_credentials',
              client_id: MONITE_CONFIG.clientId,
              client_secret: MONITE_CONFIG.clientSecret,
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch token');
          }

          const data = await response.json();
          return {
            access_token: data.access_token,
            token_type: 'Bearer',
            expires_in: data.expires_in,
          };
        }}
      >
        {children}
      </BaseMoniteProvider>
    </ThemeProvider>
  );
}