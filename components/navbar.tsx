import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navbar = () => {
    const router = useRouter()
    console.log(router)



  return (
    <div className='flex justify-center mt-10'>
        <div className='bg-slate-600 w-11/12 h-14 rounded-full shadow-md flex justify-around items-center space-x-80'>
            {/* <div className=''> */}
                <h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>EDMSociety</h1>
                
                <div className='w-3/12'>
                    <div className='flex justify-between text-slate-100'>
                    <Link href='/' className={`text-xl font-semibold hover:text-slate-300 ${router.pathname === '/' && 'underline underline-offset-4'}`}>Music</Link>
                        <p className='text-xl'>|</p>
                        <Link href='/events' className={`text-xl font-semibold hover:text-slate-300 ${router.pathname === '/events' && 'underline underline-offset-4'}`}>Events</Link>
                        <p className='text-xl'>|</p>
                        <Link href='/groups' className={`text-xl font-semibold hover:text-slate-300 ${router.pathname === '/groups' && 'underline underline-offset-4'}`}>Groups</Link>
                    </div>
                </div>
                <button className='bg-indigo-400 rounded-full px-5 py-1 text-slate-100 hover:bg-indigo-500'>Sign In</button>
            {/* </div> */}
        </div>
    </div>
  )
}

export default navbar