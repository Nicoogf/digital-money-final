import { Schema , model , models } from "mongoose";

const UserSchema = new Schema({
    nombre : {
        type: String ,
        required: [ true , "El campo Nombre es obligatorio"]
    },
    apellido : {
        type: String ,
        required: [ true , "El campo Apellido es obligatorio"]
    },
    dni : {
        type: Number ,
        required : [ true , "El campo DNI es obligatorio"],
        unique: true
    },
    email : {
        type: String ,
        required : [ true , "El campo Email es obligatorio"],
        unique: true
    },
    password : {
        type: String ,
        required: [ true , "El campo Contraseña es obligatorio"],
        select: false       
    },
    telefono : {
        type: Number ,
        required: [ true , "El campo Telefono es obligatorio"],
        unique: true       
    },
    
},{
    timestamps: true
})

const User = models.User || model("User" , UserSchema)
export default User