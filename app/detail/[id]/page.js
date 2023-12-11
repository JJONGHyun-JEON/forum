import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"


export default async function Detail(props){

    const db = (await connectDB).db('forum') //DB입출력 코드는 server component 안에서만 사용
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)}) //post컬렉션에 있는 모든 데이터를 꺼내주세요
    console.log(props.params.id)
    

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>글제목 : {result.title}</h4>
            <h4>글내용 : {result.content}</h4>
        </div>
    )
}