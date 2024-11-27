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