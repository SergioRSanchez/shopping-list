import { Apple, Sandwich, Carrot, Milk, Beef, MoreVertical } from 'lucide-react';

interface Item {
  id: number
  item: string
  quantity: number
  measure: string
  category: string
  done: boolean
  handleToggleDone: () => void
  handleDeleteItem: () => void
  handleCleanList: () => void
}

export default function Item(props: Item) {

  return (
    <div  className={`bg-gray-400 p-4 border-[1px] border-gray-300 rounded-lg flex items-center justify-between flex-1 ${props.done && 'opacity-50'} `}>
      <div
        className='border-purple-light bg-gray-400 flex items-center gap-4'
      >
        <input 
          type="checkbox"
          onClick={props.handleToggleDone}
          name={props.item}
          id={props.id.toString()}
          checked={props.done}
          className='appearance-none cursor-pointer w-6 h-6 border-2 rounded-md border-purple-light hover:bg-purple-dark checked:bg-success checked:border-success checked:hover:bg-success-light checked:hover:border-success-light transition-all duration-200 checked:after:content-["✓"] items-center justify-center flex text-white'
        />
        <div>
          <p className={`text-gray-100 text-sm font-bold capitalize ${props.done && 'line-through'}`}>{props.item}</p>
          <p className='text-gray-200 text-xs'>
            {props.quantity == 1 && props.measure === 'unit' && `${props.quantity} unidade`}
            {props.quantity != 1 && props.measure === 'unit' && `${props.quantity} unidades`}
            {props.quantity == 1 && props.measure === 'liter' && `${props.quantity} litro`}
            {props.quantity != 1 && props.measure === 'liter' && `${props.quantity} litros`}
            {props.quantity == 1 && props.measure === 'weight' && `${props.quantity} kg`}
            {props.quantity != 1 && props.measure === 'weight' && `${props.quantity} kgs`}
          </p>
        </div>
      </div>
      
      <div className='flex items-center gap-3'>
        {
          props.category === 'fruit' &&
          <div className='bg-orange-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Apple className='text-orange h-4 w-4'/>
            <span className='text-orange text-xs font-semibold hidden sm:block'>fruta</span>
          </div>
        }
        {
          props.category === 'bakery' &&
          <div className='bg-yellow-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Sandwich className='text-yellow h-4 w-4'/>
            <span className='text-yellow text-xs font-semibold hidden sm:block'>padaria</span>
          </div>
        }
        {
          props.category === 'vegetable' &&
          <div className='bg-green-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Carrot className='text-green h-4 w-4'/>
            <span className='text-green text-xs font-semibold hidden sm:block'>legume</span>
          </div>
        }
        {
          props.category === 'drink' &&
          <div className='bg-blue-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Milk className='text-blue h-4 w-4'/>
            <span className='text-blue text-xs font-semibold hidden sm:block'>bebida</span>
          </div>
        }
        {
          props.category === 'meat' &&
          <div className='bg-pink-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Beef className='text-pink h-4 w-4'/>
            <span className='text-pink text-xs font-semibold hidden sm:block'>carne</span>
          </div>
        }
        <button onClick={props.handleDeleteItem}>
          <MoreVertical className='text-purple-light hover:text-purple w-5 h-5 transition-all duration-200' />
        </button>
      </div>
    </div>
  )
}