import { Link } from 'react-router-dom'

const NavBar = ({ toggleMenu, menuOpen }) => {
  return (
    <nav className='fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-white shadow z-50'>
      <Link to='/' className='text-xl font-bold'>Peter Kerfoot</Link>
      <button 
        className={`hamburger hamburger--collapse ${menuOpen ? 'is-active' : ''}`}
        type='button'
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
    </nav>
  )
}

export default NavBar