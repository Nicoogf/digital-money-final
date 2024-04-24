import { ConnectionMongoDB } from '@/libs/mongoose'
import React from 'react'

const RegisterPage = async() => {

  ConnectionMongoDB()
  const respuesta = fetch("/api/users" , {
    method: "POST",    
  })
  
  return (
    <main className="col-span-8 bg-gray-200  h-[calc(100vh-135px)] flex justify-center items-center">
         <div className=''>
            <form className='flex flex-col gap-y-2'> 
                <h1 className='bg-gray-900 text-white  py-2 text-center'> Registro </h1>
                <input  placeholder='nombre'/>
                <input  placeholder='apellido'/>
                <input  placeholder='dni'/>
                <input  placeholder='correo'/>
                <input  placeholder='contra'/>
                <input  placeholder='confirm contra'/>
                <input  placeholder='telefono'/>
                <button className='bg-blue-500 text-white py-2'> Registrarse </button>
            </form>

         </div>
    </main>
  )
}

export default RegisterPage