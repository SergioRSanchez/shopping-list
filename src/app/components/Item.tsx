import { Apple, Sandwich, Carrot, Milk, Beef, MoreVertical } from 'lucide-react';


interface Item {
  id: number
  item: string
  quantity: number
  measure: string
  category: string
  done: boolean
}

export default function Item(props: Item) {
  return (
    <div className={`bg-gray-400 p-4 border-[1px] border-gray-300 rounded-lg flex items-center justify-between flex-1 ${props.done && 'opacity-50'}`}>
      <div className='flex items-center gap-4'>
        <div  className='border-purple-light bg-gray-400'>
          <input type="checkbox" name="" id=""/>
        </div>
        <div>
          <p className={`text-gray-100 text-sm font-bold ${props.done && 'line-through'}`}>{props.item}</p>
          <p className='text-gray-200 text-xs'>
            {props.quantity == 1 && props.measure === 'unit' && `${props.quantity} unidade`}
            {props.quantity != 1 && props.measure === 'unit' && `${props.quantity} unidades`}
            {props.quantity == 1 && props.measure === 'liter' && `${props.quantity} litro`}
            {props.quantity != 1 && props.measure === 'liter' && `${props.quantity} litros`}
            {props.quantity == 1 && props.measure === 'weight' && `${props.quantity} Kg`}
            {props.quantity != 1 && props.measure === 'weight' && `${props.quantity} Kgs`}
          </p>
        </div>
      </div>
      
      <div className='flex items-center gap-3'>
        {
          props.category === 'fruit' &&
          <div className='bg-orange-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Apple className='text-orange h-4 w-4'/>
            <span className='text-orange text-xs font-semibold hidden sm:block'>{props.category}</span>
          </div>
        }
        {
          props.category === 'bakery' &&
          <div className='bg-yellow-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Sandwich className='text-yellow h-4 w-4'/>
            <span className='text-yellow text-xs font-semibold hidden sm:block'>{props.category}</span>
          </div>
        }
        {
          props.category === 'vegetable' &&
          <div className='bg-green-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Carrot className='text-green h-4 w-4'/>
            <span className='text-green text-xs font-semibold hidden sm:block'>{props.category}</span>
          </div>
        }
        {
          props.category === 'drink' &&
          <div className='bg-blue-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Milk className='text-blue h-4 w-4'/>
            <span className='text-blue text-xs font-semibold hidden sm:block'>{props.category}</span>
          </div>
        }
        {
          props.category === 'meat' &&
          <div className='bg-pink-dark p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2'>
            <Beef className='text-pink h-4 w-4'/>
            <span className='text-pink text-xs font-semibold hidden sm:block'>{props.category}</span>
          </div>
        }
        <MoreVertical className='text-purple-light w-5 h-5' />
      </div>
    </div>
  )
}