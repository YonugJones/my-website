import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import OverlayMenu from './OverlayMenu'

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <NavBar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <OverlayMenu open={menuOpen} toggleMenu={closeMenu} />
      <main className='pt-16 px-4'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout