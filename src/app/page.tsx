import { Check, Sandwich, Plus, Apple, MoreVertical } from 'lucide-react'

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
      
      
        <main className='flex flex-col items-center justify-center px-6 sm:px-12'>
          <h1 className='text-gray-100 font-bold text-2xl'>Lista de Compras</h1>

          {/* FORMULÁRIOS */}
          <div>
            <form className='flex flex-col gap-3 lg:flex-row'>
              {/* ITENS */}
              <div className='flex flex-col gap-2 group'>
                <label htmlFor="item" className='text-gray-200 text-xs group group-focus-within:text-purple-light transition-all duration-200'>Item</label>
                <input 
                  type="text" 
                  id='item'
                  name='item'
                  required
                  className='item-input p-3 text-sm text-gray-100 bg-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1 '
                />
              </div>

              {/* PARTE DE BAIXO */}
              <div className='flex items-end gap-3 justify-between'>
                {/* QUANTIDADE */}
                <div className='flex flex-col gap-2 group'>
                  <label htmlFor="quantity" className='text-gray-200 text-xs group group-focus-within:text-purple-light transition-all duration-200'>Quantidade</label>
                  <div className='flex'>
                    <input type="number" id='quantity' name='quantity' required className='p-3 text-sm text-gray-100 bg-gray-500 w-[4.5rem] border-[1px] border-gray-300 rounded-l-md focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1'/>
                    <select name="measure" id="measure" className='p-3 bg-gray-400 text-xs text-gray-200 rounded-r-md w-[4.5rem]'>
                      <option value="unit" className='hover:bg-red-500'>Un.</option>
                      <option value="liter">L</option>
                      <option value="weight">Kg</option>
                    </select>
                  </div>
                </div>

                {/* CATEGORIA */}
                <div className='flex flex-col gap-2 group'>
                  <label htmlFor="" className='text-gray-200 text-xs group group-focus-within:text-purple-light transition-all duration-200'>Categoria</label>
                  <select name="category" id="category" className='bg-gray-400 text-xs text-gray-200 rounded-r-md p-[0.875rem] w-32 border-[1px] border-gray-300 rounded-l-md focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1'>
                    <option value="" className='text-gray-200'>Selecione</option>
                    <option value="bakery" className='text-gray-100'>Padaria</option>
                    <option value="vegetable" className='text-gray-100'>Legume</option>
                    <option value="meat" className='text-gray-100'>Carne</option>
                    <option value="fruit" className='text-gray-100'>Fruta</option>
                    <option value="drink" className='text-gray-100'>Bebida</option>
                  </select>
                </div>

                {/* BOTÃO DE CADASTRAR */}
                <button className='bg-purple hover:bg-purple-dark p-2 h-min rounded-full transition-all duration-200'>
                  <Plus className='text-gray-100 h-6 w-6' />
                </button>
              </div>
            </form>
          </div>

          {/* LISTA */}
          <div className='mt-10 sm:w-96'>
            {/* ITEM */}
            <div className='bg-gray-400 p-4 border-[1px] border-gray-300 rounded-lg flex items-center justify-between item-item'>
              <div className='flex items-center gap-4'>
                <div  className='border-purple-light bg-gray-400'>
                  <input type="checkbox" name="" id=""/>
                </div>
                <div>
                  <p className='text-gray-100 text-sm font-bold'>Maça</p>
                  <p className='text-gray-200 text-xs'>2 unidades</p>
                </div>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='bg-orange-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
                  <Apple className='text-orange h-4 w-4'/>
                  <span className='text-orange text-xs hidden sm:block'>fruta</span>
                </div>
                <MoreVertical className='text-purple-light w-5 h-5' />
              </div>
            </div>
          </div>
        </main>

    </div>
  )
}
