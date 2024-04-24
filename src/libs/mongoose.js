import { connect } from "mongoose";

const{URI_DATABASE} = process.env

if(!URI_DATABASE) {
    throw new Error ("MONGO_URI No esta declarado")
}


export async function ConnectionMongoDB () {
    try {
        const { connection } = await connect(URI_DATABASE)   
            if ( connection.readyState === 1 ) {
                console.log("MongoDB Se conecto")
                return Promise.resolve( true )
            }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }
}


