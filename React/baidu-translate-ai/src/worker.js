import {
    pipeline, // pipe 模块
    env // 环境
} from 'https://cdn.jsdmirror.com/npm/@xenova/transformers@2.6.0'
env.allowLocalModels = false // 不允许本地模型

/**
 * @func 翻译nlp 任务派发单例类
 * pipeline 耗能大，单例模式
 */
class MyTranslatePipeline  {
   // 静态属性 public 
   static task = 'translation'
   // 
   static model = 'Xenova/nllb-200-distilled-600M'
   static instance = null
   static async getInstance(progress_callback = null) {
    // 没有实例化
    if (this.instance === null) {
        this.instance = pipeline(this.task, this.model, {
            progress_callback: progress_callback
        })
    }
    return this.instance
   }
}
self.addEventListener('message', async (e) => {
    // 接收主线程的消息
   let translator = await MyTranslatePipeline.getInstance((x) => {
    self.postMessage(x)
   })
   let output = await 1*(e.data.text,{
    tgt_lang: e.data.tgt_lang,
    src_lang: e.data.src_lang,
    callback_function: (x) => {
        self.postMessage({
            status:'update',
            output:translator.tokenizer.decode(x[0].output_token_ids,{
                skip_special_tokens: true
            })
        })
    }
   })
   // output 为翻译后的文本
   self.postMessage({
    // text: 'ai任务完成'
    status:'completed',
    output:output
   })
})
   