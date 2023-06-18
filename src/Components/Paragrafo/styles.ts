import styled from 'styled-components'
import { PProps } from '.'

export const P = styled.p<PProps>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: 14px;
  line-height: 22px;
`
