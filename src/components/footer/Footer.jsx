
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoFacebook from '../../assets/logoFacebook.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'


export default function Footer(){
  return(
    <footer className={s.footer}>
      <nav className={s.navFooter}>
        <ul>
          <li><a href=""><img src={logoLinkedin} alt="Logo do Linkedin" /></a></li>
          <li><a href=""><img src={logoFacebook} alt="Logo do Facebook" /></a></li>
          <li><a href=""><img src={logoInstagram} alt="Logo do Instagram" /></a></li>
        </ul>
      </nav>
    </footer>
  )
}