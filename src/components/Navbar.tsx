const navLinks = [
  { label: 'Home', active: true },
  { label: 'Studio' },
  { label: 'About' },
  { label: 'Journal' },
  { label: 'Reach Us' },
]

export default function Navbar() {
  return (
    <nav className="relative z-10 w-full">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <span
          className="text-3xl tracking-tight select-none"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#000000' }}
        >
          Aethera<sup style={{ fontSize: '0.5em', verticalAlign: 'super' }}>®</sup>
        </span>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(({ label, active }) => (
            <li key={label}>
              <a
                href="#"
                className="text-sm transition-colors duration-200 no-underline hover:opacity-80"
                style={{ color: active ? '#000000' : '#6F6F6F', fontFamily: 'Inter, sans-serif' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="rounded-full px-6 py-2.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03] cursor-pointer border-0"
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Begin Journey
        </button>
      </div>
    </nav>
  )
}
