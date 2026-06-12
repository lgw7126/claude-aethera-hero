import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.5

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tick = () => {
      const { currentTime, duration, style } = video
      if (!duration) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      const timeLeft = duration - currentTime

      if (currentTime < FADE_DURATION) {
        style.opacity = String(currentTime / FADE_DURATION)
      } else if (timeLeft < FADE_DURATION) {
        style.opacity = String(timeLeft / FADE_DURATION)
      } else {
        style.opacity = '1'
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      const v = videoRef.current
      if (!v) return
      v.style.opacity = '0'
      setTimeout(() => {
        v.currentTime = 0
        v.play().catch(() => {})
      }, 100)
    }

    video.addEventListener('ended', handleEnded)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '300px',
          inset: 'auto 0 0 0',
          width: '100%',
          height: 'calc(100% - 300px)',
          objectFit: 'cover',
          opacity: 0,
          transition: 'none',
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
    </div>
  )
}
