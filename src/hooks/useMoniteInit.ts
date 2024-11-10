import { useState, useEffect } from 'react';
import { MONITE_CONFIG } from '../config/monite';

interface MoniteInitState {
  entityId: string | null;
  error: string | null;
  loading: boolean;
}

export function useMoniteInit() {
  const [state, setState] = useState<MoniteInitState>({
    entityId: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    async function initializeMonite() {
      try {
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
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to authenticate with Monite');
        }

        const { access_token } = await response.json();

        // Fetch or create an entity
        const entityResponse = await fetch(`${MONITE_CONFIG.apiUrl}/entities`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!entityResponse.ok) {
          const errorData = await entityResponse.json();
          throw new Error(errorData.message || 'Failed to fetch entity');
        }

        const entityData = await entityResponse.json();
        const entityId = entityData.data?.[0]?.id;

        if (!entityId) {
          throw new Error('No entity found');
        }

        setState({ entityId, error: null, loading: false });
      } catch (error) {
        console.error('Monite initialization error:', error);
        setState({ 
          entityId: null, 
          error: error instanceof Error ? error.message : 'An error occurred', 
          loading: false 
        });
      }
    }

    initializeMonite();
  }, []);

  return state;
}