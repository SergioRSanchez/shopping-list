import Image from 'next/image'

import backgroundWeb from '@/assets/background-web.png'
import backgroundMobile from '@/assets/background-mobile.png'

import Background from './components/Background'

function BackgroundWeb() {
  return (
    <Image 
      src={backgroundWeb}
      alt='Background image'
      className='w-full -z-10 h-[11rem]'
      quality={100}
      placeholder='blur'
      
      // sizes='(max-width: 768px) 100vw 30vh, 50vw'
    />
  )
}

function BackgroundMobile() {
  return (
    <Image 
      src={backgroundMobile}
      alt='Background image'
      className='w-full -z-10 h-[11rem]'
      quality={100}
      placeholder='blur'
    />
  )
}

export default function Home() {
  return (
    <div className=''>
      <div className=''>
        <Background 
          alt='My Hero'
          desktopImage={backgroundWeb}
          mobileImage={backgroundMobile}
        />
      </div>
      <div className='relative top-0'>Teste</div>
    </div>
  )
}
