import Projetos from './Containers/Projetos'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <Container>
        <EstiloGlobal />
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
