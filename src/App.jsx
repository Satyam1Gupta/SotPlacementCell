import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './component/Hero'
import Header from './component/Header'
import CardWithLogin from './component/CardWithLogin'
import Login from './component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={
            <>
              <div className='bg-gray-100 sticky top-0 z-10'>
                <Header/>
                <div className='flex justify-center'>
                    <div className=' w-[85%] bg-white h-1 '></div>
                </div>
              </div>
              <div className='bg-gray-100 w-auto h-[100vh] flex justify-center relative'>
                  <Hero/>
              </div>
              <CardWithLogin/>
         </>
            }/>
             <Route path="/login" element={<Login title="ECE"/>}/>
          </Routes>
          </BrowserRouter>
      
    </>
  )
}

export default App
