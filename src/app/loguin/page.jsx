'use client'
import React, { useState } from 'react'


const LoguinForm = () => {

 const [ valor , setValor ] = useState("")   
 const [ usuario , setUsuario] = useState({usuario:"" , pass:""})


  
  return (
    <main className="col-span-8 bg-gray-200  h-[calc(100vh-135px)] flex justify-center items-center">
    <div className=''>

       <form className='flex flex-col gap-y-2' onSubmit={""}> 
           <h1 className='bg-gray-900 text-white text-center py-2 '> Iniciar Seccion</h1>
           <input  name="usuario" onChange={""}/>
           <input  name="pass" onChange={""}/>
           <button className='bg-blue-500 text-white py-2'> Iniciar Seccion </button>
       </form>

    </div>
</main>
  )
}

export default LoguinForm 
