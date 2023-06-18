import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quas qui.
      Magnam, neque corporis iusto facilis, saepe enim nisi distinctio accusamus
      ea voluptatibus doloribus harum cupiditate assumenda tempore facere.
      Doloremque.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=davislamenha&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=davislamenha&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
