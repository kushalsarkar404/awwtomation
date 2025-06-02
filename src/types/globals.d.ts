// src/types/globals.d.ts or src/gtag.d.ts

export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
