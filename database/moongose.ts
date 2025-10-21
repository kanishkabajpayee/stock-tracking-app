import mongoose from 'mongoose'

const MONGOOSE_URI = process.env.MONGOOSE_URI

declare global {
    var mongooseCache :{
        conn : typeof mongoose | null;
        promise : Promise<typeof mongoose> | null
    }
}
let cached = global.mongooseCache

if (!cached){
    cached = global.mongooseCache = {conn:null , promise:null}
}


export const connectToDatabase = async () => {
if(!MONGOOSE_URI) throw Error("MONGOOSE_URI must be defined in .env")

if(cached.conn) return cached.conn

if(!cached.promise)
{
    cached.promise = mongoose.connect(MONGOOSE_URI,{bufferCommands:false}

    )
}
try {
    cached.conn = await cached.promise
    
} catch (error) {
   console.log("Error occurred in DB connection")
   console.log(error)

}
console.log(`Connected to DB in ${process.env.NODE_ENV}`)
    

return cached.conn
}

