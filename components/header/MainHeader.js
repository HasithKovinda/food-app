
import Link from "next/link"
import Logo from '@/assets/logo.png'
import styles from './MainHeader.module.css'
import Image from "next/image"
import MainHeaderBackground from "./MainHeaderBackground"
import NavLink from "./NavLink"

function MainHeader() {
  return (
   <>
   <MainHeaderBackground/>
     <header className={styles.header}>
      <Link href='/' className={styles.logo} >
        <Image src={Logo} alt="logo"  priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink herf='/meals'>Browse Meals</NavLink>
        </li>
        <li>
           <NavLink herf='/community'>Foodies Community</NavLink>
        </li>
      </ul>
      </nav>
    </header>
   </>
  )
}

export default MainHeader