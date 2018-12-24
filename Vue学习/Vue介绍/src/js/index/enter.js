
//这个是打包的入口文件，所有的js和css都引到这里，打包会打包进去
// import './test.js'
import 'css/mystyle.css'

// 定义名为 todo-itemdie 的新组件
//在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。
//这里组件名字中不能有大写，大写的话不会识别
Vue.component('todo-itemdie', {
    template: '<li>这是个待办项</li>'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ],
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    },
    methods: {
        //在 reverseMessage 方法中，我们更新了应用的状态，但没有触碰 DOM——所有的 DOM 操作都由 Vue 来处理，你编写的代码只需要关注逻辑层面即可
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

document.getElementById('test').onclick = myFunction;

function myFunction() {
    // document.getElementById("changeContent").innerHTML = location.hash
    app.message = '12121';
    console.log(1212);
    app.seen = false;
}
