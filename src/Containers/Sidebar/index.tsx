import Avatar from '../../Components/Avatar'
import P from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Davis Sampaio</Titulo>
      <P tipo="secundario" fontSize={16}>
        davislamenha
      </P>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
