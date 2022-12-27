function whenDOMReady() {
//此处填写需要执行的代码，如:
get_name();
}

whenDOMReady() //打开网站之后先执行一次函数
document.addEventListener(“pjax:complete”, whenDOMReady)