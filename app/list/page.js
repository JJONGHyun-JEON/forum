import { connectDB } from "@/util/database.js"

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
                        <h4> {result[i].title}</h4>
                        <p>{result[i].content}</p>
                        <a>자세히보기</a>
                    </div>
                )
                
            })
                
        }
      {/* <div className="list-item">
        <h4> {result[0].title}</h4>
        <p>{result[0].content}</p>
      </div>
      <div className="list-item">
        <h4>{result[1].title}</h4>
        <p>{result[1].content}</p>
      </div>
      <div className="list-item">
        <h4>{result[2].title}</h4>
        <p>{result[2].content}</p>
      </div> */}
    </div>
  )
} 

function aaa(){

}