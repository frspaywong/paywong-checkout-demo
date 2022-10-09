export {};

declare module 'paywong-sdk';

declare global {
  interface Window {
    paywong: any;
  }
}
