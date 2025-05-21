import Link from 'next/link'

const Navbar = () => {

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">

    </nav>
  )
}

export default Navbar
