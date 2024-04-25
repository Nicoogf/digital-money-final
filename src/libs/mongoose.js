import { connect } from "mongoose";

export async function ConnectionMongoDB () {
    try {
        const { connection } = await connect("mongodb://localhost:27017/digital-money")   
            if ( connection.readyState === 1 ) {
                console.log("MongoDB Se conecto")
                return Promise.resolve( true )
            }
    } catch (error) {
        console.log(error)
        return Promise.reject(false)
    }
}


