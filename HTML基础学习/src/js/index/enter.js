
//这个是打包的入口文件，所有的js和css都引到这里，打包会打包进去
import './test.js'
import 'css/mystyle.css'


function myFunction() {
    document.getElementById("changeContent").innerHTML = location.hash;
}

//通过 id 查找 HTML 元素
document.getElementById('test').onclick = myFunction;

document.getElementById("paramsShow").innerHTML = location.hash;

//使用#标识参数的时候，参数变化的时候页面不会自动刷新，使用？标识参数的时候，参数变化的时候页面会自动刷新
function getParam() {
    let hash = location.hash;
    let hashAry = hash.split('#');
    if (hashAry.length == 2) {
        return hashAry[1];
    }
    return '';
}

function requestFundInfoData() {

    let fundCode = getParam();

    // 发送ajax 请求 需要 五步

    // （1）创建异步对象
    let ajaxObj = new XMLHttpRequest();

    // （2）设置请求的参数。包括：请求的方法、请求的url。
    ajaxObj.open('get', '/interface/net/index/' + fundCode);

    // （3）发送请求
    ajaxObj.send();

    //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
    //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
    ajaxObj.onreadystatechange = function () {
        // 为了保证 数据 完整返回，我们一般会判断 两个值
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
            // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
            console.log('数据返回成功');

            // 数据是保存在 异步对象的 属性中
            console.log(ajaxObj.responseText);


            let json = JSON.parse(ajaxObj.responseText);

            document.getElementById('contentShow').innerHTML = json.data.name;

            // 修改页面的显示
            // document.querySelector('h1').innerHTML = ajaxObj.responseText;
        } else {

        }
    }
}


requestFundInfoData();