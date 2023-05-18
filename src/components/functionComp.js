// 函数式组件
export default {
    name: 'functionComp',
    functional: true,
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    render(h, context) {
        const { props } = context
        if(props.text){
            return <div>{props.text}</div>
        } else {
            return <div>暂无数据</div>
        }
    },
}