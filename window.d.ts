export {};

declare global {
  interface Window {
    __METRIKA_CONSENT?: boolean;
    ym?: (id: number, ...args: unknown[]) => void;
  }
}
