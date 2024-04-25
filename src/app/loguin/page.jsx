'use client'
import React, { useState } from 'react'
import axios , { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoguinPage = () => {

  const [ errors , setErrors ] = useState( "" )
  const router = useRouter()
  
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
    <main className="col-span-8 bg-gray-200  h-[calc(100vh-135px)] flex justify-center items-center">
         <div className=''>
            <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}> 
                <h1 className='bg-gray-900 text-white  py-2 text-center'> Ingresar </h1>
               

                <label> Correo </label>
                <input  placeholder='correo'name='correo' />

                <label> Contraseña </label>
                <input  placeholder='contra'name='contra' />

             
                
                <button className='bg-blue-500 text-white py-2' type='submit'> Iniciar </button>
            </form>

            {errors && (
              <div className='bg-red-500 text-white'> {errors} </div>
            )}

         </div>
    </main>
  )
}

export default LoguinPage