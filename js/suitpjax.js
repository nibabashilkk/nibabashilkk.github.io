function whenDOMReady() {
//此处填写需要执行的代码，如:
document.getElementById("page-name").innerText = document.title.split("| 爱加班的小刘")[0];
}

whenDOMReady() //打开网站之后先执行一次函数
document.addEventListener("pjax:complete", whenDOMReady) //pjax加载完成之后执行上面函数