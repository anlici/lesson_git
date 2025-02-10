import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Blog Post: {slug}</h1>
            {/* 这里可以添加获取并渲染文章详细内容的逻辑 */}
        </div>
    );
}