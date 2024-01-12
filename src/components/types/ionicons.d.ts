declare module "ionicons" {
  export function addIcons(...icons: string[]): void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}
