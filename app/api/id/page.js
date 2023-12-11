import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props){
    //DB입출력 코드는 server component 안에서만 사용
    const db = (await connectDB).db('forum') 

    //post컬렉션에 있는 해당 id의 값을 구해주세요
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)}) 

    await db.collection('post').updateOne({_id : 1}, {$set:{title:'바보', content : '바보2'}})

    console.log(result + 'asdfasdfasdf')
    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content}/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}