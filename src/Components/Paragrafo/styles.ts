import styled from 'styled-components'
import { PProps } from '.'

export const P = styled.p<PProps>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`
