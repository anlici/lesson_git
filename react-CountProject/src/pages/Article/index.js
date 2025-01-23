
import {useSearchParams,useParams} from'react-router-dom'

const Article = () => {
    // 解构
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('id'))
  const name = searchParams.get('name')
  return (
    <div>
      <h1>文章页</h1>
      <h2>文章-0{name}</h2>
    </div>
  )
    // const params = useParams()
    // return (
    //     <div>
    //         <h1>文章页</h1>
    //         <h2>文章-{params.id}-{params.name}</h2>
    //     </div>
    // )
}


export default Article