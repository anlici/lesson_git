export default function createElement(ele,props,...children) {
    let virtualDOM = {
        $$typeof: Symbol.for('react.element'),
        key: null,
        ref: null,
        type: null,
        props: {}
    };
    let len = children.length;
    virtualDOM.type = ele;
    if(props != null ) {
        virtualDOM.props = {
            ...props
        };
    }
    // 
    if(len === 1) {
        virtualDOM.props.children = children[0];
    }else if(len > 1) {
        virtualDOM.props.children = children;
    }
    return virtualDOM;
};

/*
  基于传统for/in 循环，存在弊端（性能差，不能遍历私有属性，公有也迭代了）
  只能迭代“可枚举属性，非Symbol”
  解决：
    - Reflect.ownKeys() 可以遍历私有属性,es6,不兼容ie
    - Object.keys() 可以遍历私有属性,es5,不兼容ie
    - for...of 可以遍历私有属性,es6,不兼容ie ？
   
*/

// Array.prototype.B = 1;
// let arr = [1,2,3];
// arr[Symbol('aa')] = 1;
// console.log(arr);
// // Symbol 不能转成字符串，所以不能用for...in 循环
// let keys = Reflect.ownKeys(arr); //索引私有属性，不管是否可枚举
// keys.forEach(key => {
//     console.log(key,arr[key]);
// })