import { NextResponse } from "next/server" ;
import { ConnectionMongoDB } from "@/libs/mongoose";
import User from "@/models/User";
import bcrypt from "bcrypt"

export async function POST( request ) {    

        const {nombre,apellido,dni,email,password,telefono} = await request.json()

        if( !nombre || !apellido ||  !dni ||  !email || !password || !telefono ){
            return NextResponse.json({message : "Faltan completar campos"},{status:400})   
        }

        if(password.length < 6) {
           return NextResponse.json({message : "Contaseña Corta"},{status:400})  
        }
        
        try {
            await ConnectionMongoDB()
            const usuarioEncontrado = await User.findOne( { email } )
    
                if( usuarioEncontrado ) {
                    return NextResponse.json({
                        message : "El email ya se encuentra Registrado" , email
                    },{status : 409})
                }

                
                const hashedPassword = await bcrypt.hash(password,12)
            
                const usuarioCreado = new User({
                    nombre,
                    apellido,
                    dni,
                    email,
                    password : hashedPassword ,
                    telefono
                })
            
                const usuarioGuardado = await usuarioCreado.save()
            
                console.log(usuarioGuardado)
                return NextResponse.json({
                    email: usuarioGuardado.email,
                    nombre : usuarioGuardado.nombre
                })
        } catch (error) {
            console.log(error);
            return NextResponse.json(
                { message: "Error al guardar el usuario" }, 
                { status: 400 })
        }
    }