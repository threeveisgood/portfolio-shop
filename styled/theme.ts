import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#000000',
    logoColor: '#c79a3b',
    darkColor: '#010f19',
    mainColor: 'rgb(24, 166, 59)'      
  },
  padding: '12px',
  fontSize: {
      large: '18px',
      medium: '14px',
      small: '12px',
      micro: '10px'        
  },
  responsive: {
    phone: '37.5em',
    phoneLg: '56.25em',
    tablet: '68.75em',
    tabletLg: '75em'
  },
  line: {
    gray: '1px solid #f4f2f2'
  },
  gap: {
    card: '1.3rem'
  }
}