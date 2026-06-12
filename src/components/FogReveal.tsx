import { useEffect, useState } from 'react'

const layers = [
  // 주 안개 — 먼저 이동, 뚜렷한 본체
  {
    delay: 0,
    duration: 2.2,
    blur: 0,
    opacity: 1,
    maskStop: '80%',
    z: 55,
    color: 'rgb(220, 228, 238)',
  },
  // 중간 확산층
  {
    delay: 0.2,
    duration: 2.7,
    blur: 24,
    opacity: 0.85,
    maskStop: '70%',
    z: 54,
    color: 'rgb(210, 222, 235)',
  },
  // 느린 흐릿한 꼬리
  {
    delay: 0.45,
    duration: 3.2,
    blur: 55,
    opacity: 0.65,
    maskStop: '58%',
    z: 53,
    color: 'rgb(200, 215, 230)',
  },
  // 마지막 옅은 잔여 안개
  {
    delay: 0.7,
    duration: 3.8,
    blur: 85,
    opacity: 0.4,
    maskStop: '45%',
    z: 52,
    color: 'rgb(195, 210, 228)',
  },
]

export default function FogReveal() {
  const [swept, setSwept] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // 800ms 정지 후 안개 걷힘 시작 — 확실하게 보이게
    const t1 = setTimeout(() => setSwept(true), 800)
    // 마지막 레이어 완료 후 DOM에서 제거 (0.7 + 3.8 = 4.5s + 여유)
    const t2 = setTimeout(() => setDone(true), 5200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (done) return null

  return (
    <>
      {layers.map((layer, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: layer.z,
            pointerEvents: 'none',
            backgroundColor: layer.color,
            opacity: layer.opacity,
            filter: layer.blur > 0 ? `blur(${layer.blur}px)` : undefined,
            // 오른쪽 가장자리를 흐릿하게 — 안개 끝이 자연스럽게 퍼지는 느낌
            WebkitMaskImage: `linear-gradient(to right, white ${layer.maskStop}, transparent 100%)`,
            maskImage: `linear-gradient(to right, white ${layer.maskStop}, transparent 100%)`,
            transform: swept ? 'translateX(110%)' : 'translateX(0%)',
            transition: `transform ${layer.duration}s cubic-bezier(0.76, 0, 0.24, 1) ${layer.delay}s`,
          }}
        />
      ))}
    </>
  )
}
