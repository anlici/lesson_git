/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = '老呆';
function getBooksList() {
    // 1.渲染图书列表
    axios({
        url:'http://hmajax.itheima.net/api/books',
        params:{
            // 外号：获取数据
            creator
        }
    }).then( res => {
        // 2.渲染数据
        // 2.1 获取数据
        console.log(res);
        const bookList = res.data.data;
        //console.log(bookList);
        // 渲染数据
        const htmlStr = bookList.map((item,index) => {
            return `
             <tr>
                    <td>${ index + 1 }</td>
                    <td>${ item.bookname }</td>
                    <td>${ item.author }</td>
                    <td>${ item.publisher }</td>
                    <td data-id=${item.id}>
                        <span clas="del">删除</span>
                        <span class="edit">编辑</span>
                    </td>
            </tr>`
        }).join(''); // 将数组变成字符串
        console.log(htmlStr);
        // 插入tbody中
        document.querySelector('.list').innerHTML = htmlStr;
       
    })
}
// 页面加载运行，获取并且渲染数据
getBooksList();

/**
 * 目标2：添加图书
 *  2.1 新增弹框，-> 显示和隐藏
 *  2.2 收集表单数据，并且提交到服务器保存
 *  2.3 刷新图书列表
 */
// 2.1创建弹框对象
const addModalDom = document.querySelector('.add-modal');
const addModal = new bootstrap.Modal(addModalDom);
// 保存-点击 - 隐藏弹框
document.querySelector('.add-btn').addEventListener('click',() => {
   // 2.2收集表单数据并且提交到服务器
   const addForm = document.querySelector('.add-form');
   const bookObj = serialize(addForm,{hash:true,empty:true});

   axios({
      url:'http://hmajax.itheima.net/api/books',
      method:'post',
      data:{
        ...bookObj, // 对象解构,获得三个属性
       creator // 外号，额外属性
      }
   }).then( res => {
     // 2.3添加成功后，请求并且渲染到图书列表
      getBooksList();
     // 重置表单,(清空表单数据)使用内置reset方法
      addForm.reset();
     // 隐藏弹框，使用bootstrap的hide方法
      addModal.hide();
   })
   
})

/**
 * 目标3：删除图书
 *  3.1 删除元素绑定点击事件 -> 获取图书id（动态创建，委托父级，使用事件委托）
 *  3.2 调用删除接口
 *  3.3 刷新图书列表
 */
// 3.1 事件委托
document.querySelector('.list').addEventListener('click',(e) => {
    // 触发时间目标元素
    const target = e.target;
    // 判断点击是删除元素
    if(target.classList.container('del')) {
        // 自定义属性id，绑定在父级del
        const theId = target.parentNode.dataset.id;
        console.log(theId);
    }


})