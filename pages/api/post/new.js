import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"

export default async function handler(요청, 응답){
    if(요청.method == 'POST'){
        const db = (await connectDB).db('forum') //DB입출력 코드는 server component 안에서만 사용
        let result = await db.collection('post').insertOne(요청.body) //post컬렉션에 있는 모든 데이터를 꺼내주세요
        return 응답.status(200).redirect('/list')
    }
    
}