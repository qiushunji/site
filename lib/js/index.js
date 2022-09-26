
//首页导航栏搜索事件
function mysearch_submit() {
	var search = document.getElementById("mysearch_input");
	var keywords = search.value;
	search.value = "";
	window.open("https://www.baidu.com/s?wd=" + keywords);
}

//为每个 list 添加点击事件(依赖 jQuery)
function open_websit(list) {
	if (list != undefined) {
		window.open($(list).find('a').attr('href'));
	}
}
