import { P as PEstilo } from './styles'

export type PProps = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const P = ({ children, tipo = 'principal' }: PProps) => (
  <PEstilo tipo={tipo}>{children}</PEstilo>
)

export default P
