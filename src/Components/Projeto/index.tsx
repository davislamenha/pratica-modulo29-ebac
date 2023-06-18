import P from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto</Titulo>
    <P tipo="secundario">Lista de tarefas</P>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
