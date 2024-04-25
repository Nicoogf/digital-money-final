import { ConnectionMongoDB } from "@/libs/mongoose";
import User from "@/models/User";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
         
          name: "Credentials",         
          credentials: {
            email: { label: "email", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
           
           await ConnectionMongoDB()
           console.log(credentials)
           const userFound =  await User.findOne({email : credentials?.email}).select("+password")
           if(!userFound) throw new Error ("Credenciales invalidas")
           const passwordMatch = await bcrypt.compare(credentials.password , userFound.password)
           if (!passwordMatch) throw new Error ("Credenciales invalidas")
           console.log(userFound)
           return userFound
          }
        })
      ],
      callbacks:{
        jwt({ account , token , user, profile , session}){         
          if( user ) token.user = user         
          return token
        },
        session( {session , token} ){
          console.log( session , token)
          session.user = token.user
          return session
        }

        
      }
})


export { handler as GET , handler as POST }