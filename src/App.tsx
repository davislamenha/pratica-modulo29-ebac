import { ThemeProvider } from 'styled-components'

import Projetos from './Containers/Projetos'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import TemaLight from './themes/light'
import TemaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocarTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <Container>
        <EstiloGlobal />
        <Sidebar trocarTema={trocarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
