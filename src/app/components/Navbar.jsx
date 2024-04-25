
import React from 'react'
import logogris from "../../../public/logogris.png"
import logoverde from "../../../public/logoverde.png"
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

const Navbar = async() => {

  const session = await getServerSession()
  console.log(session?.user)


  return (
    <nav className={`${session ? "bg-grisoscuro/90" : "bg-verdelima/90"} text-grisoscuro w-full z-50`}>

        <section className='w-full max-w-[1280px] mx-auto flex flex-row items-center justify-between py-2 h-[60px]'>
            
            <div className='ml-4'> 
                <Image src={session ? logoverde :  logogris} className='w-16' alt="Logo Digital-Money" priority />
            </div> 

            <div className='hidden flex flex-row mr-4 gap-x-4 '> 

                <div>
                    <h4 className='bg-red-500 text-white'> Notificaciones </h4>
                </div>

                <div>
                    <h4> Usuario </h4>
                </div>   
            </div>  

            <div className='flex flex-row mr-4 gap-x-4'> 

                <Link href={"/loguin"}>
                    <h4 className='bg-grisclaro text-white py-2 px-3 rounded-lg text-sm border border-grisclaro font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-200'> Iniciar Sesion </h4>
                </Link>
                 
            </div>  

        </section>        
    </nav>
  )
}

export default Navbar