import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

ul {
  list-style: none;
}

body {
  background-color: ${(props) => (props.theme as Theme).corDeFundo};
  padding: 80px 0;

  @media (max-width: 768px) {
   padding: 16px 0;
  }
}
`

export default EstiloGlobal

export const Container = styled.div`
  width: min(100% - 30px, 1440px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 160px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    display: block;
  }
`
