'use client'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MySite
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 text-2xl">☰</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
