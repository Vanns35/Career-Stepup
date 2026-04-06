import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // load preference from localStorage
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'light') {
        document.documentElement.classList.add('light')
        setTheme('light')
      } else {
        // default to dark
        document.documentElement.classList.remove('light')
        setTheme('dark')
      }
    } catch (e) {
      // ignore
    }
  }, [])

  function toggle() {
    if (theme === 'dark') {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <button aria-label="Toggle color theme" onClick={toggle} className="ml-4 p-2 rounded border border-gray-700 hover:bg-gray-700">
      {theme === 'dark' ? (
        // sun icon for light mode
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.5a.75.75 0 01.75-.75h0a.75.75 0 01.75.75V5a.75.75 0 01-1.5 0V3.5zM10 15a.75.75 0 01.75-.75h0a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0V15zM4.22 4.22a.75.75 0 011.06 0l.884.884a.75.75 0 11-1.06 1.06L4.22 5.28a.75.75 0 010-1.06zM14.834 14.834a.75.75 0 011.06 0l.884.884a.75.75 0 11-1.06 1.06l-.884-.884a.75.75 0 010-1.06zM3.5 10a.75.75 0 01.75-.75H5a.75.75 0 010 1.5H4.25A.75.75 0 013.5 10zM15 10a.75.75 0 01.75-.75H16.5a.75.75 0 010 1.5H15.75A.75.75 0 0115 10zM4.22 15.78a.75.75 0 010-1.06l.884-.884a.75.75 0 111.06 1.06l-.884.884a.75.75 0 01-1.06 0zM14.834 5.166a.75.75 0 010-1.06l.884-.884a.75.75 0 111.06 1.06l-.884.884a.75.75 0 01-1.06 0zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/></svg>
      ) : (
        // moon icon for dark mode (use current color so it is visible in light mode)
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z"/></svg>
      )}
    </button>
  )
}
