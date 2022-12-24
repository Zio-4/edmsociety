import React from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react"
import ProfilePlaceholder from '../assets/profile-placeholder.png'

const profile = () => {
    const { data: session } = useSession()
    console.log('session data in profile page: ', session)

  return (
    <>
        <main>
            <section className='flex justify-center'>
                <div className='bg-slate-500 rounded-md p-4'>
                    <Image src={session?.user?.image || ProfilePlaceholder} alt="profile avatar" width={100} height={100}/>


                    <p className='text-slate-100'>This would be my bio lol</p>
                </div> 
            </section>
        </main>
    </>
  )
}

export default profile