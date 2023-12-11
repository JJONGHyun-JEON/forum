export default function handler(요청, 응답){
    console.log('1234')
    return 응답.status(200).json('처리완료')
}