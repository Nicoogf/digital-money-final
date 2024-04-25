'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const Dashboard = () => {

 const { data : session , status } = useSession()
 console.log(session, status)
  return (
    <section>
      <h1> Inicio </h1>
      
    </section>
  )
}

export default Dashboard