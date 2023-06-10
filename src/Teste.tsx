import styled from 'styled-components'

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

export default function Teste() {
  return (
    <div>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Clique aqui</span>
      </BotaoPerigo>
    </div>
  )
}
