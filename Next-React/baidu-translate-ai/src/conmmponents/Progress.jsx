export default function Progress  ({text,percentage}) {
    // 空值合并运算符 ？？ 如果percentage为null或者undefined,则返回0
    percentage = percentage ?? 0;
    return (
        <div className="progress-container">
            {/* 进度条宽度是percentage决定 */}
            <div className="progress-bar" style={{'width':`${percentage}%`}}>
                {text}{`${percentage.toFixed(2)}%`}
            </div>
        </div>
    )
}
