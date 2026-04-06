import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-semibold tracking-tight">Career Upsteps</Link>

        <nav className="space-x-6 hidden md:block">
          <Link href="/" className="header-link">Home</Link>
          <Link href="/about" className="header-link">About</Link>
          <Link href="/services" className="header-link">Services</Link>
          <Link href="/blog" className="header-link">Blog</Link>
          <Link href="/reviews" className="header-link">Reviews</Link>
          <Link href="/contact" className="header-link font-medium">Contact</Link>
        </nav>

        <div className="md:hidden">
          <Link href="/contact" className="px-3 py-2 bg-accent text-white rounded">Contact</Link>
        </div>
      </div>
    </header>
  )
}
