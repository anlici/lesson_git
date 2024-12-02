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
