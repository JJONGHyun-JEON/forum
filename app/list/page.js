import { connectDB } from "@/util/database.js"
import Link from "next/link"


export default async function List() {

    const db = (await connectDB).db('forum') //DB입출력 코드는 server component 안에서만 사용
    let result = await db.collection('post').find().toArray() //post컬렉션에 있는 모든 데이터를 꺼내주세요
    console.log(result)
  return (


    <div className="list-bg">
        {
            result.map((a, i)=>{
                return (
                    <div className="list-item" key={i}>
                    <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link>
                    <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
                    <p>1월 1일</p>
                  </div>
                )
                
            })
                
        }
    </div>
  )
} 

function aaa(){

}