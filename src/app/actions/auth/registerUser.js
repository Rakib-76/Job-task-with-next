"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const registerUser = async (payload) =>{

    const userCollection = dbConnect("user")

    // validition
    // const {email, password} = payload;
    // if(email || password) return {success: false, message: "Not found"};
    const user = await userCollection.findOne({email:payload.email})
    if(!user){

        const result = await userCollection.insertOne(payload)
        return result
    }
    // return  null;
    return  { success: false, message: err.message };
}