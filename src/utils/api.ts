import { MONITE_CONFIG } from '../config/monite';

export async function fetchMoniteToken() {
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

  return response.json();
}

export async function fetchEntities(token: string) {
  const response = await fetch(`${MONITE_CONFIG.apiUrl}/entities`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch entities');
  }

  return response.json();
}