import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  padding-top: 80px;
}
`

export default EstiloGlobal

export const Container = styled.div`
  width: min(100% - 30px, 1440px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
    border-radius: 50%;
  }
`
