import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  primary: "#5B42F3",
  purple: "#621296",
  cyan: "#00DDEB",
  white: "#e9e9e9",
  black: "#474747",
  lowblack: "#222222",
  gray: "#2F4F4F",
  lowgray: "#d6d6d6",
  gold: "#a6946d",
  priceColor: "#c71585",
  padding: "12px",
  fontSize: {
    large: "18px",
    medium: "14px",
    small: "12px",
    micro: "10px",
  },
  media: {
    phone: "@media only screen and (max-width: 480px)",
    phoneLg: "@media only screen and (max-width: 600px)",
    tabPort: "@media only screen and (max-width: 768px)",
    tabLand: "@media only screen and (max-width: 1080px)",
  },
  responsive: {
    phone: "37.5em",
    phoneLg: "56.25em",
    tablet: "68.75em",
    tabletLg: "75em",
  },
  line: {
    gray: "1px solid #f4f2f2",
  },
  gap: {
    card: "1.3rem",
  },
};
