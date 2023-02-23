/// <reference types="vite/client" />
// https://cn.vitejs.dev/guide/env-and-mode.html ==== vite环境配置 ===
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
//
interface ImportMetaEnv {
  readonly VITE_AXIOS_BASE_URL: string;
}
