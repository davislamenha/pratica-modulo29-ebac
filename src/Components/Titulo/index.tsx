import { Titulo as TituloEstilo } from './styles'

export type TituloProps = {
  children: string
  fontSize?: number
}

const Titulo = (props: TituloProps) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
