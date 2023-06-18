import styled from 'styled-components'
import { P } from '../../Components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin: 24px 0 40px;
`

export const BotaoTema = styled.button`
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.corDeFundo};
  border-radius: 12px;
  padding: 8px;
  background-color: ${(props) => props.theme.corPrincipal};
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
