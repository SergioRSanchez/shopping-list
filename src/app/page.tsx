import backgroundWeb from '@/assets/background-web.png'
import backgroundMobile from '@/assets/background-mobile.png'

import Background from './components/Background'


export default function Home() {
  return (
    <div className='bg-gray-600 h-screen'>
      <header className=''>
        <Background 
          alt='Background image'
          desktopImage={backgroundWeb}
          mobileImage={backgroundMobile}
          className='-z-10'
        />
      </header>
      
      <main className='flex flex-col items-center justify-center px-6'>
        <h1 className='text-gray-100 font-bold text-2xl'>Lista de Compras</h1>

        <div>
          <form>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='text-gray-200 text-xs'>Item</label>
              <input 
                type="text" 
                id='item'
                name='item'
                required
                className='p-3 text-gray-100 bg-gray-500 border-[1px] border-gray-300 rounded-md'
                style={{ width: 'calc(100vw - 1.5rem)' }}
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
