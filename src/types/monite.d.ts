declare module '@monite/sdk-api' {
  export interface MoniteSDKConfig {
    apiUrl: string;
    entityId: string;
    locale: string;
    theme?: any;
    fetchToken: () => Promise<{
      access_token: string;
      token_type: string;
      expires_in: number;
    }>;
  }
}

declare module '@monite/sdk-react' {
  export function MoniteProvider(props: {
    children: React.ReactNode;
    apiUrl: string;
    entityId: string;
    locale: string;
    theme?: any;
    fetchToken: () => Promise<{
      access_token: string;
      token_type: string;
      expires_in: number;
    }>;
  }): JSX.Element;

  export function PayableList(): JSX.Element;
  export function ReceivableList(): JSX.Element;
  export function CounterpartList(): JSX.Element;
  export function ProductList(): JSX.Element;
}