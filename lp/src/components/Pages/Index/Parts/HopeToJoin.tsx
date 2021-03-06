import { useEffect, useState } from "react"

interface Advertise {
  url: string
  text: string
}
const advertises: Advertise[] = [
  { url: 'https://ulab-uu.com/2021/11/17/click-poster/', text: 'Clickポスター' },
  { url: 'https://media.uu-circles.com/', text: 'uu-yell' }
]
export const HopeToJoin = () => {
  const [hello, setHello] = useState(0)
  useEffect(() => {
    setHello(
      Math.floor(Math.random() * advertises.length)
    )
  }, [])
  return (
    <div className='flex' style={{ justifyContent: 'center', marginBottom: '40px' }}>
      <a
        href={advertises[hello].url}
        className="block relative text-center bg-green-100 ad"
        style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          borderRadius: '40% 70% 30% 40%/30% 50% 50% 50%'
        }}>
        <p className='font-bold font-lg'>
          {advertises[hello].text}
        </p>
      </a>
    </div>
  )
}
