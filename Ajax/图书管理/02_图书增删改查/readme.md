### bookstrap 弹窗
核心代码：
```js
 <script>
        // 1.创建弹框对象
        const myBox = document.querySelector('.name-box');
        const modal = new bookstrap.Modal(myBox);

        //编辑姓名->默认姓名->点击->show显示弹框
        document.querySeletor('.edit-btn').addEventListener
        ('click',() => {
            // 默认姓名
            document.querySeletor('.username').value = '张三';
            modal.show();
        })

        //保存->点击->获取姓名打印->hide隐藏弹框
        document.querySeletor('.save-btn').addEventListener
        ('click',() => {
            // 获取姓名
            const username = document.querySeletor('.username').value;
            console.log(username);
            modal.hide();
        })
      </script>
```
```js
// target 代表dom（文档对象模型）元素，del是需要检查的类名
/*  - classList 能根据动态的列表，自动更新，返回指定元素所有类名
    -  contains 是DOMTokenList对象一个方法，检测列表是否包含制定类名。以字符串为参数，返回ture or false
    适用场景：判断按钮是否是指定按钮
*/
target.classList.contains('del')
/*  -  注意：url使用模版字符串，`` ,其中 ${theId} 是变量，
    -  method 指定http请求方法，使用delete方法，从服务器删除资源
    -  .then() 用于请求成功后回调，promise对象的一个方法
*/
axios({
            url:`http://hmajax.itheima.net/api/books/${theId}`,
            method:'DELETE',
        }).then(() => {

            getBooksList(); 
        })

```