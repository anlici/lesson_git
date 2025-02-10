import { useState,useRef,useEffect } from "react"
import LanguageSelector from "./conmmponents/LanguageSelector"
import './App.css' 
import Progress from "./conmmponents/Progress"

const App = () => {
  // useState 现在最牛逼的hook技术
  // vue 借鉴了 react hooks 思想
  // useReducer vue-router ，react 框架本身就内置了hook函数
  // pinia api
  const [sourceLanguage,setSourceLanguage] = useState('eng_Latn')
  const [targetLanguage,setTargetLanguage] = useState('zho_Hans')
  const [input,setInput] = useState('')
  const [output,setOutput] = useState('')
  const [disabled,setDisabled] = useState(false) 
  // LLM准备好了吗？
  const [ready,setReady] = useState(true)

  // 进度条数据数组 {filename:,percent:''}
  const [progressItems,setProgressItems] = useState([])
  // 
  const worker = useRef(null)  //响应式web worker对象
  useEffect(() => {
    // 局部 onMounted
    // console.log('mounted');

    if(!worker.current){
      worker.current = new Worker(
        new URL('./worker.js',import.meta.url),{
          type:'module'
        }
      )
      console.log(worker.current);

      worker.current.addEventListener('message',(e) => {
        console.log(e,'------');
        switch (e.data.status){
          // LLM 依赖的多个文件触发 initiate 事件
          case 'initiate':
            setReady(false)
            // 接收一个函数 
            // 上一次的状态
            setProgressItems((prev) => [...prev,e.data])
            break;
            case 'progress':
              // console.log(e.data, '?????')
              setProgressItems(
                prev => prev.map(item => {
                  if (item.file === e.data.file) {
                    return {...item, progress: e.data.progress};
                  } else {
                    return item;
                  }
                })
              )
              break;
              case 'done':
                setProgressItems(prev => prev.filter(
                  item => item.file!==e.data.file
                ))
                break
              case 'ready':
                setReady(true)
                break
              case 'update':
                setOutput(e.data.output)
                break
              case 'completed':
                setDisabled(false)
                break
        }
      })
    }
    
    return () => {
      // onUnMounted
      console.log('unmounted');
      // worker.current = null
    }
  })
  const translate = () => {
    setDisabled(true)
    // ai任务比较复杂，event loop 在这里就不灵了
    // 前端游戏，加密，压缩，AI，交给多线程 Web Woker
    // html5浏览器提供的多线程机制(纯计算类，不能做DOM，没有this)
    worker.current.postMessage({
      text:input,
      src_lang:sourceLanguage,
      tgt_lang:targetLanguage
    })
  }
  return (
    <>
      <h1>Transformer.js</h1>
      <p>来自HuggingFace 抱抱脸社区的NLP js库 ，完成常见的AI任务</p>
      <p>未来端模型将大放异彩</p>
      <div className="container">
        <LanguageSelector 
          type="Source"
          defaultLanguage={sourceLanguage}
          onChange={x => setSourceLanguage(x.target.value)}
        />
        <LanguageSelector 
          type="Target"
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}
        />
      </div>
      <div className="textbox-container">
        <textarea 
          value={input}
          rows={3}
          onChange={(e) => setInput(e.target.value)}
        />
        <textarea
          value={output}
          role={3}
          readOnly
        ></textarea>
      </div>
      <button disabled={disabled} onClick={translate}>Translate</button>
      {/* <Progress text="下载中" percentage={20}/> */}
      <div className="progress-bar-container">
        {
          ready === false && (
            <label>Loading models...</label>
          )
        }
        {progressItems.map((data) => (
          <div key={data.file}>
            <Progress text={data.file} percentage={data.progress}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App