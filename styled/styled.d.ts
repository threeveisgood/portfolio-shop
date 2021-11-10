import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      logoColor: string;
      darkColor: string;
      mainColor: string;
    }

    padding: string;

    fontSize: {
        large: string;
        medium: string;
        small: string;
        micro: string;       
    }

    responsive: {
      phone: string;
      phoneLg: string;
      tablet: string;
      tabletLg: string;
    }

    line: {
      gray: string;
    }   
  }
}