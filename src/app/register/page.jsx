'use client'
import React, { useState } from 'react'
import axios , { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const RegisterPage = () => {

  const [ errors , setErrors ] = useState()
  const router = useRouter()
  
  const handleSubmit = async( e ) => {
    e.preventDefault()
    const formData  = new FormData( e.currentTarget )  

    try {   
      const signupResponse = await axios.post("/api/auth/signup" , {
       nombre : formData.get("nombre") ,
       apellido : formData.get("apellido"),
       dni : formData.get("dni"),
       email : formData.get("correo"),
       password : formData.get("contra"),
       telefono :  formData.get("telefono"),
      })

      console.log( signupResponse )

      const res =  await signIn("credentials" , {
        email : signupResponse.data.email,
        password : formData.get("contra"),
        redirect: false,
      })

      if( res?.ok ) return router.push("/dashboard")
      console.log( res )
      
    } catch (error) {
      console.log(error)
      if( error instanceof AxiosError){
        setErrors(error.response?.data.message)
      }
     
    }
  
  }

  return (
    <main className="col-span-8 bg-gray-200  h-[calc(100vh-135px)] flex justify-center items-center">
         <div className=''>
            <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}> 
                <h1 className='bg-gray-900 text-white  py-2 text-center'> Registro </h1>
                <label> Nombre </label>
                <input  placeholder='nombre' name='nombre'/>

                <label> Apellido </label>
                <input  placeholder='apellido' name='apellido'/>

                <label> Dni </label>
                <input  placeholder='dni'name='dni' />

                <label> Correo </label>
                <input  placeholder='correo'name='correo' />

                <label> Contraseña </label>
                <input  placeholder='contra'name='contra' />

                <label> Confirmar Contraseña </label>
                <input  placeholder='confirm contra' name='confirm' />

                <label> Telefono </label>
                <input  placeholder='telefono' name='telefono' />
                
                <button className='bg-blue-500 text-white py-2' type='submit'> Registrarse </button>
            </form>

            {errors && (
              <div className='bg-red-500 text-white'> {errors} </div>
            )}

         </div>
    </main>
  )
}

export default RegisterPage