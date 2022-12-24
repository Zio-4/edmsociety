import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import ProfilePlaceholder from '../assets/profile-placeholder.png'

interface iChildren {
    children: any
}

const navbar = ({ children }: iChildren) => {
    const router = useRouter()
    const { data: session } = useSession()

    console.log('auth session: ', session)

  return (
    <>
    <div className='flex justify-center mt-10'>
        <div className='bg-slate-600 w-11/12 h-14 rounded-full shadow-md flex justify-around items-center space-x-80'>
                <h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>EDMSociety</h1>

                <div className='w-3/12'>
                    <div className='flex justify-between text-slate-100'>
                    <Link href='/' className={`text-xl font-semibold hover:text-slate-300 ${router.pathname === '/' && 'underline underline-offset-4 decoration-violet-300'}`}>Music</Link>
                        <p className='text-xl'>|</p>
                        <Link href='/events' className={`text-xl font-semibold hover:text-slate-300 ${router.pathname === '/events' && 'underline underline-offset-4 decoration-violet-300'}`}>Events</Link>
                        <p className='text-xl'>|</p>
                        <Link href='/groups' className={`text-xl font-semibold hover:text-slate-300 ${router.pathname === '/groups' && 'underline underline-offset-4 decoration-violet-300'}`}>Groups</Link>
                    </div>
                </div>
                {session ? (
                    <div>
                        <Image onClick={() => router.push('/profile')} src={session.user?.image || ProfilePlaceholder} alt='profile avatar' width={32} height={32} className='inline-block rounded-full mr-8 cursor-pointer'/>
                        <button onClick={() => signOut()} className='bg-red-400 rounded-full px-5 py-1 text-slate-100 hover:bg-red-500'>Sign Out</button>
                    </div>
                ) : (
                    <button onClick={() => signIn()} className='bg-indigo-400 rounded-full px-5 py-1 text-slate-100 hover:bg-indigo-500'>Sign In</button>
                )}
            </div>
        </div>
        
        {children}
    </>
  )
}

export default navbar