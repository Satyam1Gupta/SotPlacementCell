
import { Card } from 'flowbite-react';
import sot_main from './../assets/sot_main.jpeg'

export default function HorizontalCard() {
  return (
   <div className='flex  flex-col md:flex-row items-center justify-evenly  md:m-16 p-3 space-y-5 md:space-y-0'>
    <div className='w-72'>
      <img className=' rounded-3xl'src={sot_main} alt="" />
    </div>
     <Card className='md:w-[30rem] w-80'>
      <p className="text-blue-500 text-xs font-bold">
         DEAN'S MESSAGE
      </p>
      <div className="font-normal text-xl text-blue-900">
      AUS continues to be ranked as the top GFTI university of the country and among the best in the world. AUS attracts the brightest students...
      </div>
      <div className='text-lg'>
      Dr. Debaprasad Das
      </div>
      <p className='text-gray-700'>
        Dean of School of Technology
      </p>
    </Card>
   </div>
  )
}


