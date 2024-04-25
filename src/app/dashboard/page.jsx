'use client'
import React from 'react'
import { useSession , signOut } from 'next-auth/react'

const Dashboard = () => {

 const { data : session , status } = useSession()
 console.log(session , status)
  return (
    <section className="col-span-12 md:col-span-8 bg-gray-200/80 h-[calc(100vh-135px)] flex flex-col  border border-verdelima/50 p-4">
      <div className='mb-2'>
        <h3 className='font-semibold'> Inicio </h3>
      </div>

      <div className='bg-grisoscuro rounded-lg text-white px-4 py-8'>
        <div className='flex flex-row justify-end gap-x-3'>
          <h4 className='text-sm underline'> ver tarjetas </h4>
          <h4 className='text-sm underline'> ver Cvu </h4>
        </div>
        <div>
          <h5 className='text-sm font-thin mb-4'>Dinero Disponible</h5>
        </div>
        <div>
          <h6 className='border border-verdelima inline p-2 rounded-2xl'> $ 6890534,17 </h6>
        </div>
      </div>

      <div className='flex flex-col gap-y-2 mt-2'>
        <h5 className='bg-verdelima px-2 py-3 text-grisoscuro font-semibold rounded-lg text-center'> Ingresar diner </h5>
        <h5 className='bg-verdelima px-2  py-3 text-grisoscuro font-semibold rounded-lg text-center'> Pago de servicios </h5>
      </div>

      <div className='mt-6'>
        <input placeholder='Buscar en tu actividad' className='p-2 rounded-lg w-full'/>
      </div>

      <div>
        <h5> Tu actividad </h5>
        <section>
          <article className='flex flex-row'>
            <div className='w-5 h-5 bg-verdelima rounded-full'/>
            <h6> Transferiste a Rodrigo </h6>
            <div>
              <h6> $ 14785 </h6>
              <h6> Sabado </h6>
            </div>
          </article>
        </section>
        <div>
          <h6> Ver toda tu actividad</h6>
        </div>
        
      </div>
     
      <button className='bg-verdelima text-grisoscuro p-2 rounded-lg' onClick={() =>signOut()}> Cerrar Session </button>
    </section>
  )
}

export default Dashboard