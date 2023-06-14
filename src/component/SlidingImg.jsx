'use client';
import sot_main from './../assets/sot_main.jpeg'
import sot_sun from './../assets/sot_sun.jpeg'
import sot_ground from './../assets/sot_ground.jpeg'
import { Carousel } from 'flowbite-react';

export default function SlidingImg() {
  return (
   <>
     <Carousel className='-mt-16 p-5 sm:w-3/4 sm:h-3/4  sm:mt-10' >    
      <img
      className='rounded-lg'
        alt="..."
        src={sot_main}
      />
      <img
      className='rounded-lg'
        alt="..."
        src={sot_sun}
      />
      <img
      className='rounded-lg'
        alt="..."
        src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" 
      />
      <img
      className='rounded-lg'
        alt="..."
        src={sot_ground}
        />
      <img
        alt="..."
        src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" 
      />
    
    
    </Carousel>
    </>
  )
}


