/**
 *目标1：信息渲染
 * 1.1. 获取信息
 * 1.2 回显数据到标签
 * 
 */
// 外号
const creator = '西无菌'
// 1.1 获取信息
axios({
    url: 'http://hmajax.itheima.net/api/settings',
    params: {
        creator
    }
}).then( res => {
    const userObj  = res.data.data; //对象
    // 1.2 回显数据到标签
    Object.keys(userObj).forEach( key => {
        // 头像
        if(key === 'avatar') {
            // 获取头像标签,src设置,把对象 key 设置为src
            document.querySelector('.prew').src = userObj[key];
        }else if(key === 'gender') {
            // 单选框：[男radio，女radio]
            const gRadioList = document.querySelectorAll('.gender');
            // 下标
            const gNum = userObj[key];
            // 设置选中状态
            gRadioList[gNum].checked = true;
            // 获取性别标签，设置value ,显示 0 
            //  console.log(userObj[key]);
        }
        else{
            document.querySelector(`.${key}`).value = userObj[key];
        }
    })
})  

/** 目标2：修改头像信息
 *   2.1 获取头像信息
 *   2.2 提交服务器并且更新回显到页面
 * 
 * */ 
document.querySelector('.upload').addEventListener('change', e => {
    // 获取头像文件
    const avatarFile = e.target.files[0];
    console.log(avatarFile);
    // 创建formData对象
    const formData = new FormData();
    // 添加头像文件
    formData.append('avatar', avatarFile);
    formData.append('creator', creator);
    // 提交服务器
    axios({
        url: 'http://hmajax.itheima.net/api/avatar',
        method: 'PUT',
        data: formData
    }).then( res => {
        // 更新回显到页面
        const imgUrl = res.data.data.avatar;
        document.querySelector('.prew').src = imgUrl;
    })
})

/**
 * 目标3：修改其他信息 + 提示框
 *  3.1收集表单数据
 *  3.2 提交服务器
 *  3.3 更新回显到页面
 * 点击 click
 *  3.4 提示框 toast
 *  
 */
document.querySelector('.submit').addEventListener('click', () => {
    // 在表单里面，属性名和id一样
    const userForm = document.querySelector('.user-form');
    // 收集表单数据
    const userObj = serialize(userForm,{hash:true,empty:true});
    console.log(userObj);
    // 新增creator
    userObj.creator = creator;
    // 性别，后端要求int,转换成数字
    userObj.gender = +userObj.gender;
    // 提交服务器
    axios({
        url: 'http://hmajax.itheima.net/api/settings',
        method: 'PUT',
        data: userObj // axios自动对象转成json
    }).then( res => {
        // toast提示框
        const toastDom = document.querySelector('.my-toast');
        const toast = new bootstrap.Toast(toastDom);
        toast.show();
    })
})