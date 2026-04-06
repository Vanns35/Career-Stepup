import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header className="border-b border-gray-700 bg-gray-900" role="banner">
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-current">Career Upsteps</Link>

          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            <Link href="/" className="header-link">Home</Link>
            <Link href="/about" className="header-link">About</Link>
            <Link href="/services" className="header-link">Services</Link>
            <Link href="/blog" className="header-link">Blog</Link>
            <Link href="/reviews" className="header-link">Reviews</Link>
            <Link href="/contact" className="header-link font-medium">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark mode toggle visible on all sizes */}
          {/* <DarkModeToggle /> */}

          {/* Contact button for small screens */}
          <div className="md:hidden">
            <Link href="/contact" className="px-3 py-2 bg-accent text-white rounded">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
