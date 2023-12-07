import { connectDB } from "@/util/database.js"
import { MongoClient } from "mongodb"

export default async function Home() {

  //db
  const db = (await connectDB).db('forum') //DB입출력 코드는 server component 안에서만 사용
  let result = await db.collection('post').find().toArray() //post컬렉션에 있는 모든 데이터를 꺼내주세요
  console.log(result)

  return (
    <div>
       n
    </div>
  )
}
