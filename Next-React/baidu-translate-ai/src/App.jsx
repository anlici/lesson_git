import { useRef,useEffect,useState } from 'react'
import LanguageSelector from './LanguageSelector.jsx'
import Progress from './conmmponents/Progress'

function App() {
  // 源语言和目标语言
  const [sourceLanguage,setSourceLanguage] = useState('eng_Latn')
  const [targetLanguage,setTargetLanguage] = useState('zho_Hans')
  // llm 是否准备好
  const [ready,setReady] = useState(false)
  // 是否禁用按钮
  const [disabled,setDisabled] = useState(true)
  const [output,setOutput] = useState('')
  // 进度条数组
  const [progressItems,setProgressItems] = useState([])
  const [input,setInput] = useState('')

  // 响应式web worker对象
  const worker = useRef(null) 
  useEffect(() => {
    if(!worker.current) {
      worker.current = new Worker(
        // import.meta.url 是一个特殊的URL，
        // 它表示当前模块的URL,指向worker.js文件
        // 并且设置type为module,表示该文件是一个ES模块
        new URL('./worker.js',import.meta.url),
        {type: 'module'}
      )
    }
    //console.log(worker.current);
    worker.current.addEventListener('message',(event) => {
     // console.log(event.data);
      switch(event.data.status) {
        case 'initiate':
          setReady(false)
          // 接收上一次的进度
          setProgressItems(prev => [...prev,e.data])
          break;
        case 'progress':
          // 是否匹配到了当前的文件
          setProgressItems(
            prev => prev.map(item => {
              if(item.file === event.data.file) {
                return {...item,progress:event.data.progress};
              }else {
                return item
              }
            })
          )
          break;
        case 'done':
          // 过滤掉已经完成的文件
          setProgressItems(
            prev => prev.filter(
              item => item.file !== event.data.file
            )
          )
          break;
        case 'ready':
          // 准备就绪
          setReady(true)
          break;
        case 'update':
          // 更新输出
          setOutput(event.data.output)
          break;
        case 'completed':
          // 所有文件都已经完成，设置禁用状态为false
          setDisabled(false)
          break;
        default:
          break;
      }
    })
  })
 const translate = () => {
  setDisabled(true) // 禁用按钮
  worker.current.postMessage({
    text: input,
    src_lang: sourceLanguage,
    tgt_lang: targetLanguage,
  })
}
  


  return (
    <>
      <h1>transformer.js</h1>
      <div className="container">
        <LanguageSelector 
          type="Source"
          // 默认语言
          defaultLanguage={sourceLanguage}
          // 下拉框改变时，改变sourceLanguage
          onChange={x => setSourceLanguage(x.target.value)}
        />
        <LanguageSelector
          type="Target"
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}
        />
        <div className="textbox-container">
          <textarea
            value={input}
            rows={3}
            onChange={x => setInput(x.target.value)}
          />
          <textarea
            value={output}
            rows={3}
            readOnly
          />
        </div>
        <button disabled={disabled} onClick={translate}>Translate</button>
        <div className="progress-bar-container">
          {
            ready === false && (
             <label>Loading...</label>
            )
          }
          {
            progressItems.map((data) => (
              <div key={data.file} className="progress-item">
                
                <Progress text={data.file} progress={data.progress}/>
              </div>
            ))
          }
        </div>



      </div>
    </>
  )
}

export default App
