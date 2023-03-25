import '@/styles/globals.scss'
import '@/styles/home.scss'
import '@/styles/about.scss'
import '@/styles/timeline.scss'
import '@/styles/contact.scss'

import Image from 'next/image'
import Link from 'next/link';
import navSvg from '../public/svg/menu-icon.svg';
import { Anek_Malayalam } from '@next/font/google'

const anekMalayalam = Anek_Malayalam({
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {

  const openNav = () => {
    document.querySelector('nav').classList.add('nav-opened')
    document.querySelector('main').classList.add('is-disabled')
  }

  const closeNav = () => {
    document.querySelector('nav').classList.remove('nav-opened')
    document.querySelector('main').classList.remove('is-disabled')
  }

  const handleOpenNavClick = () => {
    openNav();
  }

  const handleCloseNavClick = () => {
    closeNav();
  }

  return (
    <div className={`app ${anekMalayalam.className}`}>
      <div className='nav__wrapper'>
        <Image src={navSvg} alt="menu svg" height={30} width={30} className='nav__open' onClick={handleOpenNavClick} />
        <nav className='nav'>
          <span className='nav__close' onClick={handleCloseNavClick}>X Close</span>
          <Link className='nav__home' href="/" onClick={handleCloseNavClick}>Home</Link>
          <Link className='nav__about' href="/about" onClick={handleCloseNavClick}>About</Link>
          <Link className='nav__timeline' href="/timeline" onClick={handleCloseNavClick}>Timeline</Link>
          <Link className='nav__skills' href="/skills" onClick={handleCloseNavClick}>Skills</Link>
          <Link className='nav__contact' href="/contact" onClick={handleCloseNavClick}>Contact</Link>
        </nav>
      </div>
      <Component {...pageProps} />
    </div>
  )
}
