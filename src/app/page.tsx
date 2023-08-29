import { Check, Sandwich, Plus, Apple, MoreVertical } from 'lucide-react'

import backgroundWeb from '@/assets/background-web.png'
import backgroundMobile from '@/assets/background-mobile.png'

import Background from './components/Background'
import Item from './components/Item'

interface Item {
  id: number
  item: string
  quantity: number
  measure: string
  category: string
  done: boolean
}

const data: Item[] = [
  {
    id: 1,
    item: 'Maça',
    quantity: 2,
    measure: 'unidades',
    category: 'fruta',
    done: false
  },
  {
    id: 2,
    item: 'Pão francês',
    quantity: 4,
    measure: 'unidades',
    category: 'padaria',
    done: false
  },
  {
    id: 3,
    item: 'Brócolis',
    quantity: 1,
    measure: 'unidade',
    category: 'legume',
    done: false
  },
  {
    id: 4,
    item: 'Leite',
    quantity: 2,
    measure: 'litros',
    category: 'bebida',
    done: false
  },
  {
    id: 5,
    item: 'Peito de frango',
    quantity: 2,
    measure: 'kg',
    category: 'carne',
    done: false
  },
  {
    id: 6,
    item: 'Mamão',
    quantity: 1,
    measure: 'unidade',
    category: 'fruta',
    done: true
  },
]


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
      
      
        <main className='flex flex-col sm:items-center justify-center px-6'>
          <h1 className='text-gray-100 text-center font-bold text-2xl'>Lista de Compras</h1>

          {/* FORMULÁRIOS */}
          <div className='sm:w-[45rem]'>
            <form className='flex flex-col gap-3 lg:flex-row'>
              {/* ITENS */}
              <div className='flex flex-col gap-2 group flex-1'>
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
                    <select name="measure" id="measure" className='p-3 bg-gray-400 text-xs text-gray-200 rounded-r-md w-[4.5rem] group focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1'>
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
          <div className='mt-10 sm:w-[45rem] flex flex-col items-stretch gap-2 sm:gap-3'>
            {/* ITEM */}
            {
              data.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  item={item.item}
                  quantity={item.quantity}
                  measure={item.measure}
                  category={item.category}
                  done={item.done}
                />
              ))
            }
          </div>
        </main>

    </div>
  )
}
