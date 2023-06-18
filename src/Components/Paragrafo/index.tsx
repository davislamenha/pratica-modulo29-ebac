import { P as PEstilo } from './styles'

export type PProps = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secundario'
}

const P = ({ children, fontSize, tipo = 'principal' }: PProps) => (
  <PEstilo fontSize={fontSize} tipo={tipo}>
    {children}
  </PEstilo>
)

export default P
