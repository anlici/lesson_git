## nextjs字体样式
- // 引入必要的函数和组件
import { Montserrat } from '@next/font/google';

// 定义Montserrat字体，指定subsets以及preload选项（默认为true）
const montserrat = Montserrat({
  subsets: ['latin'], // 指定需要的字符集子集
  // preload默认是true，所以无需显式设置除非要关闭它
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

- 默认预加载对于内容，避免出现无样式文本闪烁（FOIT），
  无样式文字可见（FOUT），

- tailwind 里面 globals.css文件

@tailwind base;
@tailwind components;
@tailwind utilities;
- 使用sass
  全局样式 预设
  /** @type {import('next').NextConfig} */
 
const nextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
}
 
export default nextConfig
在 Next.js 配置文件 nextConfig 中设置了 Sass 选项，通过 sassOptions 的 additionalData 属性，在编译时为每个 Sass 文件注入 $var: red; 这样的全局变量定义。后面sass文件可以直接使用$var变量

- 服务器组件
- api fetch 异步调用
async function fetchData() {
  const data = await fetch('/api/data');
  const posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
  )
}

- 在 Next.js 中，更推荐使用 async/await 和 React 的并发特性，如 Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Posts posts={posts} />
</Suspense>
suspense 允许延缓渲染，直到子组件准备好。通常子组件是异步操作，比如：代码分隔，数据获取
fallback 在suspense包裹组件准备好前的占位，提供用户反馈

### 流式输出
- HTML分隔成小份，每块从服务器发送给浏览器

computed: {
    setCount (count) => {
      return count * 2;
    }
}

