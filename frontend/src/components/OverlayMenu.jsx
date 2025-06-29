import { Link } from 'react-router-dom'

const OverlayMenu = ({ open, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center gap-6 text-2xl z-40 
        transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Link to='/projects' onClick={toggleMenu}>Projects</Link>
      <Link to='/about' onClick={toggleMenu}>About</Link>
      <Link to='contact' onClick={toggleMenu}>Contact</Link>
      <a href='https://github.com/YonugJones' target='_blank' rel='noreferrer'>Github</a>
      <a href='https://www.linkedin.com/in/peter-kerfoot-b776a3359/' target='_blank' rel='noreferrer'>LinkedIn</a>
    </div>
  )
}

export default OverlayMenu