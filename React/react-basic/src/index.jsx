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