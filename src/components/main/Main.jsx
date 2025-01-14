
import imagemAnoNovo from '../../assets/imagemAnoNovo.png'
import s from './main.module.scss'

export default function Main() {
  return (
    <main className={s.main}>
      <img src={imagemAnoNovo} alt="Imagem com a escrita 'Ano Novo 2025' adornado com mini lâmpadas de decoração natalina."/>
      <section className={s.containerBoasFestas}> 
        <h3>Boas Festas!!!</h3>
        <h2>Felicidades!!!</h2>
        <section className={s.containerPoema}>
          <p>Em 2025, vamos juntos programar,</p>
          <p>com mais código limpo e muito para alcançar.</p>
          <p>Que o Ano Novo traga só funções de felicidade,</p>
          <p>e que a paz seja nossa variável de felicidade.</p>
          <p>Sem bugs, sem falhas, com muito amor!</p>
          <p>Vamos debugar os problemas com ardor!</p>
          <p>Que a vida seja sempre o output de alegria,</p>
          <p>o Vai Na Web te deseja um Ano Novo, que seja</p>
          <p>pura harmonia!</p>
        </section>
        </section>  
    </main>
  )
}