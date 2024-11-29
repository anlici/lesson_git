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
                        <span class="del">删除</span>
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
    // 触发事件目标元素
    const target = e.target;
    // 判断点击是删除元素
    if(target.classList.contains('del')) {
        // 自定义属性id，绑定在父级del
        const theId = target.parentNode.dataset.id;
        // console.log(theId);
        
        // 3.2调用删除接口，告诉后台,并且刷新图书列表
        axios({
            url:`http://hmajax.itheima.net/api/books/${theId}`,
            method:'DELETE',
        }).then(() => {
            getBooksList(); 
        })

        
    }


})

/*   4：编辑图书
   - 4.1 编辑弹框 
   - 4.2 获取当前编辑图书数据 -> 回显到编辑表单
   - 4.3 提交保存修改，并且刷新列表
*/

/* 动态创建edit事件，事件点击
编辑元素 -> 点击 -> 弹框显示
修改有潜在任务，收集提交+隐藏，用js控制，不用属性
*/
// 4.1 编辑弹框->显示和隐藏
const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)
// 编辑元素->点击->弹框显示
document.querySelector('.list').addEventListener('click', e => {
  // 判断点击的是否为编辑元素
  if (e.target.classList.contains('edit')) {
    // 4.2 获取当前编辑图书数据->回显到编辑表单中
    //dataset.id: 获取该父节点的 data-id 属性值，即书籍的 ID
    const theId = e.target.parentNode.dataset.id
    axios({
        // 路径传参
        url: `http://hmajax.itheima.net/api/books/${theId}`
    }).then(res => {
        const bookObj = res.data.data;
        // console.log(bookObj);
        
        /*  document.querySelcetor('.edit-form .bookname').value = bookObj.bookname;
           数据对象“属性” 和 标签 “类名” 一致
           遍历对象，使用属性获取对应标签，快速赋值
        */
        const keys = Object.keys(bookObj);
        // console.log(keys);
        
        keys.forEach(key => {
           document.querySelector(`.edit-form .${key}`).value = bookObj[key];
        });
    })
    editModal.show()
  }
})

// // 修改按钮 ，点击，隐藏弹框
document.querySelector('.edit-btn').addEventListener('click',() => {
    // 获取表单所有元素
    const editForm = document.querySelector('.edit-form');
    // 设置成对象 ,解构不用 .bookObj ，因为对象的属性名和标签的类名一致
    const {id,bookname,author,publisher} = serialize(editForm,{hash:true,empty:true});
    // console.log(bookObj);
    
    // 编辑key遍历赋值了id
    /*  保存正在修改的id，并且隐藏
       <input type="hidden" class="id" >
    */
    // 隐藏弹框
    editModal.hide();
    // 4.3 提交保存修改，并且刷新列表
   
   axios({
      url: `http://hmajax.itheima.net/api/books/${id}`,
      method: 'PUT',
      data: {
        bookname,
        author,
        publisher,
        creator
      }
   }).then( () => {
      getBooksList();
      editModal.hide();
   })

    
})