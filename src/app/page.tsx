'use client'

import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

import { Plus, ChevronDown, ChevronUp, Sandwich, Carrot, Beef, Apple, Milk } from 'lucide-react'

import Background from './components/Background'
import Item from './components/Item'

import backgroundWeb from '@/assets/background-web.png'
import backgroundMobile from '@/assets/background-mobile.png'


interface Item {
  id: number
  item: string
  quantity: number
  measure: string
  category: string
  done: boolean
}


export default function Home() {

  const [ itemDescription, setItemDescription ] = useState('')
  const [ itemQuantity, setItemQuantity ] = useState('')
  const [ itemMeasure, setItemMeasure ] = useState('unit')
  const [ itemCategory, setItemCategory ] = useState('')
  const [ category, setCategory ] = useState('Selecione')
  const [ categoryCheckbox, setCategoryCheckbox ] = useState(false)

  const [ data, setData ] = useLocalStorage<Item[]>('data', [])

  function handleCategoryMenu() {
    setCategoryCheckbox(!categoryCheckbox)
    const categoryMenu = document.getElementById('categories-menu')
    categoryMenu?.classList.toggle('hidden')
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItemCategory(e.target.value)
    setCategory(e.target.id)
    handleCategoryMenu()
  }

  function addItem(e: React.FormEvent) {
    e.preventDefault()
    const formattedItemQuantity = parseInt(itemQuantity)

    setData(prevData => [
      ...prevData,
      {
        id: Date.now(),
        item: itemDescription,
        quantity: formattedItemQuantity,
        measure: itemMeasure,
        category: itemCategory,
        done: false
      }
    ])
    setItemDescription('')
    setItemQuantity('1')
    setItemMeasure('unit')
    setItemCategory('')
    setCategory('Selecione')
  }

  function handleToggleDone(id: number) {
    const newData = data.map(item => {
      if (item.id === id) { 
        return { ...item, done: !item.done }
      }
      return item
    })
    setData(newData)
  }

  function handleDeleteItem(id: number) {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }

  function handleCleanList() {
    setData([])
  }

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
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  className='item-input p-3 text-sm text-gray-100 bg-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1 '
                />
              </div>

              {/* PARTE DE BAIXO */}
              <div className='flex items-end gap-3 justify-between'>
                {/* QUANTIDADE */}
                <div className='flex flex-col gap-2 group'>
                  <label htmlFor="quantity" className='text-gray-200 text-xs group group-focus-within:text-purple-light transition-all duration-200'>Quantidade</label>
                  <div className='flex'>
                    <input 
                      type="number" 
                      id='quantity' 
                      name='quantity' 
                      required
                      min='1'
                      value={itemQuantity}
                      onChange={(e) => setItemQuantity(e.target.value)}
                      className='p-3 text-sm text-gray-100 bg-gray-500 w-[4.5rem] border-[1px] border-gray-300 rounded-l-md focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1'
                    />
                    <select 
                      name="measure" 
                      id="measure"
                      required
                      value={itemMeasure}
                      onChange={(e) => setItemMeasure(e.target.value)}
                      className='p-3 bg-gray-400 text-xs text-gray-200 rounded-r-md w-[4.5rem] group focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1'
                    >
                      <option value="unit" className='hover:bg-red-500'>Un.</option>
                      <option value="liter">L</option>
                      <option value="weight">Kg</option>
                    </select>
                  </div>
                </div>

                {/* CATEGORIA */}
                <div className='flex flex-col flex-1 relative'>
                  <div className='relative flex flex-col gap-2 '>
                    <input onClick={handleCategoryMenu} checked={categoryCheckbox} type="checkbox" id='category' className='peer absolute inset-0 opacity-0 z-10 cursor-pointer'/>
                    <label htmlFor='category' className='text-xs text-gray-200 peer-checked:text-purple-light transition-all duration-200'>Categoria</label>
                    <div className='flex justify-between items-center p-[0.875rem] w-32 border-[1px] bg-gray-400 text-xs text-gray-200 rounded-md border-gray-300 focus:outline-none focus:border-purple-light focus:ring-purple-light focus:ring-1 peer-checked:border-purple-light peer-checked:ring-1 peer-checked:ring-purple-light peer-checked:outline-none'>
                      <p id='category-name'>{category}</p>
                      {!categoryCheckbox && <ChevronDown className='w-4 h-4 text-gray-200'/>}
                      {categoryCheckbox && <ChevronUp className='w-4 h-4 text-purple-light'/>}
                    </div>
                  </div>

                  <ul id='categories-menu' className='mt-1 w-32 absolute top-20 left-0 hidden z-10'>
                    <li className='flex items-center bg-gray-400 hover:bg-gray-300 p-3 border-[1px] border-gray-300 rounded-t-md relative gap-2'>
                      <input 
                        type="radio" 
                        name="category" 
                        value="bakery" 
                        id="Padaria" 
                        className='peer absolute inset-0 opacity-0'
                        onChange={e => handleCategoryChange(e)}
                      />
                      <Sandwich className='w-4 h-4 text-yellow'/>
                      <span className='text-gray-100 text-sm'>Padaria</span>
                      <span className='peer-checked:after:content-["✓"] text-sm text-purple-light absolute right-3'></span>
                    </li>
                    <li className='flex items-center bg-gray-400 hover:bg-gray-300 p-3 border-[1px] border-gray-300 relative gap-2'>
                      <input 
                        type="radio" 
                        name="category" 
                        value="vegetable" 
                        id="Legume" 
                        className='peer absolute inset-0 opacity-0' 
                        onChange={e => handleCategoryChange(e)}
                      />
                      <Carrot className='w-4 h-4 text-green'/>
                      <span className='text-gray-100 text-sm'>Legume</span>
                      <span className='peer-checked:after:content-["✓"] text-sm text-purple-light absolute right-3'></span>
                    </li>
                    <li className='flex items-center bg-gray-400 hover:bg-gray-300 p-3 border-[1px] border-gray-300 relative gap-2'>
                      <input 
                        type="radio" 
                        name="category" 
                        value="meat" 
                        id="Carne" 
                        className='peer absolute inset-0 opacity-0'
                        onChange={e => handleCategoryChange(e)}
                      />
                      <Beef className='w-4 h-4 text-pink'/>
                      <span className='text-gray-100 text-sm'>Carne</span>
                      <span className='peer-checked:after:content-["✓"] text-sm text-purple-light absolute right-3'></span>
                    </li>
                    <li className='flex items-center bg-gray-400 hover:bg-gray-300 p-3 border-[1px] border-gray-300 relative gap-2'>
                      <input 
                        type="radio" 
                        name="category" 
                        value="fruit" 
                        id="Fruta" 
                        className='peer absolute inset-0 opacity-0'
                        onChange={e => handleCategoryChange(e)}
                      />
                      <Apple className='w-4 h-4 text-orange'/>
                      <span className='text-gray-100 text-sm'>Fruta</span>
                      <span className='peer-checked:after:content-["✓"] text-sm text-purple-light absolute right-3'></span>
                    </li>
                    <li className='flex items-center bg-gray-400 hover:bg-gray-300 p-3 border-[1px] border-gray-300 rounded-b-md relative gap-2'>
                      <input 
                        type="radio" 
                        name="category" 
                        value="drink" 
                        id="Bebida" 
                        className='peer absolute inset-0 opacity-0'
                        onChange={e => handleCategoryChange(e)}
                      />
                      <Milk className='w-4 h-4 text-blue'/>
                      <span className='text-gray-100 text-sm'>Bebida</span>
                      <span className='peer-checked:after:content-["✓"] text-sm text-purple-light absolute right-3'></span>
                    </li>
                  </ul>

                </div>

                {/* BOTÃO DE CADASTRAR */}
                <button 
                  onClick={addItem}
                  className='bg-purple hover:bg-purple-dark p-2 h-min rounded-full transition-all duration-200'
                >
                  <Plus className='text-gray-100 h-6 w-6' />
                </button>
              </div>
            </form>
          </div>

          {/* LISTA */}
          <div className='h-[21rem] sm:h-[33rem] overflow-y-auto mt-10 pr-2'>
            <div className=' sm:w-[44rem] flex flex-col items-stretch gap-2 sm:gap-3'>
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
                    handleToggleDone={() => handleToggleDone(item.id)}
                    handleDeleteItem={() => handleDeleteItem(item.id)}
                    handleCleanList={handleCleanList}
                  />
                ))
              }
            </div>

          </div>
        </main>

    </div>
  )
}
