import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between py-2 px-3 shadow-md bg-white h-fit">
      <Image
        src="/logo.png"
        alt="personal logo"
        height={50}
        width={150}
      />

      <div className="links">
        <Link href="/" className="text-gray-800 hover:text-gray-900">
          Home
        </Link>
        <Link href="#" className="ml-4 text-gray-800 hover:text-gray-900">
          Linkedin
        </Link>
        <Link href="#" className="ml-4 text-gray-800 hover:text-gray-900">
          X.com
        </Link>
      </div>

      <div className="flex items-center">
        <Image
          src="/envelope-solid.svg"
          alt="envelope email icon"
          height={20}
          width={20}
        />
        <p className="ml-4 text-gray-800">
          christiancarbonari9@gmail.com
        </p>
      </div>

    </nav>
  )
}

export default Navbar
