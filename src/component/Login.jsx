'use client';
import car from './../assets/car.jpg'

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Login() {
  return (
    <div>
      <div className="flex justify-center my-16 ">
        <div className="flex m-16 md:m-1 flex-col justify-center items-center md:flex-row shadow rounded-xl md:w-[80%] lg:w-[60%] h-96 md:h-[33rem]">
            <div className=" hidden md:block h-[100%] w-full   bg-center  bg-cover rounded-lg"
                 style={{backgroundImage:"url('https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesar-perez-733745.jpg&fm=jpg')"}}
                >
                <div className="text-lg lg:text-xl text-center mt-16 space-x-5"> 
                    <a href="#">
                        <i className="fa-brands fa-facebook-f text-blue-500  bg-white rounded-full px-[14px] py-[10px] " ></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-twitter text-cyan-400 bg-white rounded-full px-[10px] py-[10px] "></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-google-plus-g text-red-500 bg-white rounded-full px-[10px] py-[10px] "></i>
                    </a>
                </div>
                <div className="text-white text-base font-semibold text-center my-10 space-y-2">
                    <h1 className="">Don't have an account ?</h1>
                    <h3> <a href="#" className="underline underline-offset-4 tracking-wide hover:text-blue-400">Signup</a> </h3>
                </div>

            </div>
            <div class="flex flex-col justify-center items-center  bg-gradient-to-t from-purple-900 via-purple-500 to-violet-400">
            <div class=" md:w-auto w-[90%]  p-8 rounded-xl  flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
                <div class="text-xl  flex flex-col justify-center items-center ">
                    <h1 class="font-semibold text-3xl text-gray-200 m-2">Log In</h1>
                    <div className='flex space-x-6 mt-2'>
                        <p className='text-white text-sm font-bold cursor-pointer'>Student</p>
                        <p className='text-white text-sm font-bold cursor-pointer'>Coordinator</p>
                        <p className='text-white text-sm font-bold cursor-pointer'>Recruiter</p>
                        <p className='text-white text-sm font-bold cursor-pointer'>Admin</p>
                    </div>
                    <div className=' mt-2 h-0.5  w-[100%] bg-gray-600'></div>
                </div>
                <div class="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                    <div class="">
                        <div class="m-1 text-lg text-gray-200 text-semibold">Username</div>
                        <input type="text" 
                            class="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                    </div>
                    <div class="">
                        <div class="m-1 text-lg text-gray-200 text-semibold">Password</div>
                        <input type="password"
                            class="border-b border-gray-200 focus:outline-none  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                    </div>
                    
                </div>
                <div class="text-center mt-7">
                    <button class=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-full text-white bg-gradient-to-t from-stone-900
                     via-purple-900 to-violet-600  font-medium">LOGIN</button>
                </div>
            </div>
            <div class="text-center my-6 flex flex-col">
                <a href="#" class="text-sm font-medium text-gray-400 hover:text-violet-500 m-1">Forgot
                    Password ?</a>
                <a href="#" class="text-sm font-bold text-gray-400 hover:text-violet-500 m-1">
                    Not a User? Create New Account</a>
            </div>
        
        </div> 
        </div>
    </div>
    <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossOrigin="anonymous"></script>
    <Button className='hover:bg-slate-100'>hi</Button>
                                     
    </div>
  )
}


