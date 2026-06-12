export default function HeroSection() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      {/* Headline */}
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl"
        style={{
          fontFamily: '"Instrument Serif", serif',
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          color: '#000000',
        }}
      >
        Beyond{' '}
        <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>silence,</em>
        {' '}we build{' '}
        <em style={{ color: '#6F6F6F', fontStyle: 'italic' }}>the eternal.</em>
      </h1>

      {/* Description */}
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
        style={{ color: '#6F6F6F', fontFamily: 'Inter, sans-serif' }}
      >
        Building platforms for brilliant minds, fearless makers, and thoughtful souls.
        Through the noise, we craft digital havens for deep work and pure flows.
      </p>

      {/* CTA */}
      <button
        className="animate-fade-rise-delay-2 rounded-full px-14 py-5 text-base font-medium mt-12 transition-transform duration-200 hover:scale-[1.03] cursor-pointer border-0"
        style={{
          backgroundColor: '#000000',
          color: '#FFFFFF',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Begin Journey
      </button>
    </section>
  )
}
