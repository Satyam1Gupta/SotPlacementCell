'use client';

import { Button, Card } from 'flowbite-react';

export default function Overview() {
  return (
   <div className='flex flex-col md:flex-row justify-center m-14 items-center space-y-5'>
        
     <Card className="max-w-sm mx-5 bg-orange-100">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Academic Facilities
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button>
        <p>
          Read more
        </p>
      </Button>
    </Card>
    <Card className="max-w-sm bg-indigo-200">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
        Programs at Triguna Sen School of Technology, AUS
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <Button>
        <p>
          Read more
        </p>
      </Button>
    </Card>
    <div className=' flex flex-col  justify-evenly mx-10'>
        <Button className='w-80 bg-gray-200 hover:bg-gray-300'>
                <p className='  text-2xl font-bold text-slate-700'>Placement brochure 2022-2023</p>
            </Button>
            <Button className='w-80 bg-gray-200 hover:bg-gray-300 '>
                <p className=' text-2xl font-bold text-slate-700'>Placement report 2021-2022</p>
            </Button>
            <Button className='w-80 bg-gray-200 hover:bg-gray-300 '>
                <p className='text-2xl font-bold text-slate-700'>Older placement report</p>
            </Button>
        </div>
   </div>
  )
}


