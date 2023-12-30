'use client'

import Link from "next/link"
import styles from './NavLink.module.css'
import { usePathname } from "next/navigation"

function NavLink({herf,children}) {
  const path = usePathname()
  return (
    <Link href={herf} className={path.startsWith(herf)? `${styles.link} ${styles.active}`:styles.link}>
      {children}
    </Link>
  )
}

export default NavLink