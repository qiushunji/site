// 声明 docsify 插件 @see https://docsify.js.org/#/write-a-plugin?id=write-a-plugin
var myDocsifyPlugin = function(hook, vm) {

	hook.init(function() {});

	hook.beforeEach(function(content) {
		return content;
	});

	hook.afterEach(function(html, next) {
		next(html);
	});

	hook.doneEach(function() {
		//为每个 ul>li添加点击事件，并跳转链接
		$('.docsify-tabs__content>ul>li').click(
			function() {
				window.open($(this).find('a').attr('href'));
			}
		);
	});

	hook.mounted(function() {});

	hook.ready(function() {
		// $('.sear-box').on('click', '.matching-post', function() {
		// 	console.log('click……');
		// 	// $('.search input').val('');
		// 	$('.results-panel').removeClass('show');
		// });
	});

}
