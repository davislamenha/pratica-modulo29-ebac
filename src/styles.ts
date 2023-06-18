import styled, { createGlobalStyle } from 'styled-components'

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
  padding-top: 80px;

  @media (max-width: 768px) {
   padding-top: 16px;
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

  img {
    max-width: 100%;
  }

  aside img {
    border-radius: 50%;
  }
`
