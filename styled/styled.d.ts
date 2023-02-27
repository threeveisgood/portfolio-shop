import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    purple: string;
    cyan: string;
    gray: string;
    lowgray: string;
    white: string;
    black: string;
    lowblack: string;
    gold: string;
    priceColor: string;

    padding: string;

    fontSize: {
      large: string;
      medium: string;
      small: string;
      micro: string;
    };

    media: {
      phone: string;
      phoneLg: string;
      tabPort: string;
      tabLand: string;
    };

    responsive: {
      phone: string;
      phoneLg: string;
      tablet: string;
      tabletLg: string;
    };

    line: {
      gray: string;
    };

    gap: {
      card: string;
    };
  }
}
