/*
    目标：网站更换背景
    1.选择图片上传，设置body背景
    2.图片上传，“保存”图片url
    3.网页运行获取url

    label 扩大表单交互范围，for 关联input表单；
    change 事件，获取input表单上传的文件
    FormData 对象，存储键值对

*/

document.querySelector('.bg-ipt').addEventListener('change',e =>{
    console.log(e.target.files[0]);
    // 提交formData对象
    const fd = new FormData();
    fd.append('img',e.target.files[0]);

    axios({
        url:'http://hmajax.itheima.net/api/uploadimg',
        method: 'POST',
        data: fd
    }).then( result => {
        const imgUrl = result.data.data.url;
        // 把url 给的网页
        document.body.style.backgroudImage = `url(${imgUrl})`;
        // 保存到本地
        localStorage.setItem('imgUrl',imgUrl);
    })
})

// 获取本地url
const imgUrl = localStorage.getItem('imgUrl');
// if(imgUrl){
//     document.body.style.backgroundImage = `url(${imgUrl})`;
// }
// 或是逻辑与短路 执行，优先级，使用括号，先判断imgUrl是否存在，存在则执行
imgUrl && (document.body.style.backgroundImage = `url(${imgUrl})`);
