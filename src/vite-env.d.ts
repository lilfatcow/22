/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MONITE_CLIENT_ID: string
  readonly VITE_MONITE_CLIENT_SECRET: string
  readonly VITE_MONITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}