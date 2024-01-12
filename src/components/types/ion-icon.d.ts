import React from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": {
        name?: string;
      };
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string;
      };
    }
  }
}
