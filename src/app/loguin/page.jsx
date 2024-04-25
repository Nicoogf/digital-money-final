'use client'
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const LoguinPage = () => {

  const [ errors , setErrors ] = useState( "" )
  const router = useRouter()
  const { data : session , status } = useSession()  
  const isLogued = status === "authenticated" ? true : false
  console.log(isLogued)
  
  const handleSubmit = async( e ) => {
    e.preventDefault()
    const formData  = new FormData( e.currentTarget )    

 
      const res =  await signIn("credentials" , {
        email : formData.get("correo"),
        password : formData.get("contra"),
        redirect: false,
      })

      if(res?.error) return setErrors( res.error )

      if( res?.ok ) return router.push("/dashboard")
      console.log( res )
      
    } 
  
  

  return (
    <main className={`${isLogued ? "col-span-1" : "col-span-12"}  bg-grisoscuro/90 h-[calc(100vh-135px)] flex justify-center items-center`}>
         <div className=''>
            <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}> 
                <h1 className='text-verdelima  py-2 text-center font-thin text-4xl'> Ingresar </h1>
               

                <label className='font-normal text-verdelima text-sm'> Correo </label>
                <input  placeholder='correo'name='correo' className='p-2 rounded-lg bg-grisclaro/60 text-white outline-verdelima border border-verdelima'/>

                <label className='font-normal text-verdelima text-sm'> Contraseña </label>
                <input  placeholder='contra'name='contra' className='p-2 rounded-lg bg-grisclaro/60 text-white outline-verdelima border border-verdelima' />

             
                
                <button className='border border-transparent bg-verdelima text-grisoscuro py-2 rounded-lg mt-2 hover:bg-grisoscuro hover:text-verdelima hover:border-verdelima transition-all duration' type='submit'> Iniciar </button>
            </form>
            <Link href="#" >
              <h6 className='text-xs text-white underline text-end mt-4'>¿Olvidaste tu Contraseña?</h6>
            </Link>

            {errors && (
              <div className='bg-red-500 text-white mt-4 rounded-lg text-sm text-center py-2'> {errors} 
              </div>
            )}

         </div>
    </main>
  )
}

export default LoguinPage