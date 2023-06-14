'use client';

import { Button, Card } from 'flowbite-react';
import Overview from './Overview';
import DeanMsg from './DeanMsg'
import Contact from './Contact'
import Footerr from './Footer';
import { Link } from 'react-router-dom';

export default function CardWithLogin() {
  return (
<div className=' bg-gray-100'>
   <div className='flex flex-col justify-evenly md:flex-row p-5'>
     <Card className="max-w-2xl rounded-xl md:ml-14">
      <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        <h4>
        A one stop portal for <span className='text-blue-500'> Placements</span>
        </h4>
      </div>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <p className='text-lg'>
          Welcome to the recruitment website For TSSOT, Assam University Silchar.
            GFTI is India's foremost industrial leadership development institution. Our Graduates are a combination of rigorous thinking, hardwork and fundamental stronghold. They 
            are nurtured by the institute to strive for excellence and deliver impact in their field of work. Let us begin..
        </p>
      </div>
    
    </Card>
    <div className='flex flex-col justify-evenly items-center m-4 md:pr-9 space-y-3'>
      <Link to='/login'>
        <Button className='w-56 rounded-3xl'>
            <p className=' px-8 text-lg font-bold'>Student</p>
        </Button>
        </Link>
        <Button className='w-56 rounded-3xl'>
            <p className=' px-8 text-lg font-bold'>Coordinator</p>
        </Button>
        <Button className='w-56 rounded-3xl'>
            <p className=' px-8 text-lg font-bold'>Recruiter</p>
        </Button>
        <Button className='w-56 rounded-3xl'>
            <p className=' px-8 text-lg font-bold'>Admin</p>
        </Button>
    </div>
   </div>
  {/* Overview */}
<div>
    <Overview/>
    </div>
    {/* Dean's message */}
    <DeanMsg/>
    {/* Contact Us */}
    <Contact/>
    <Footerr/>
</div>
  )
}


