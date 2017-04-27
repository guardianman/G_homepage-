var num = 0;
var nextFn = function() {
	//让上一张淡出
	$('.imgList li').eq(num).stop().fadeOut(1000);
	num++;
	if(num > 3) {
		num = 0;
	}
	//让下一个角标增加current...
	$('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	//让下一张淡入
	$('.imgList li').eq(num).stop().fadeIn(1000);
}

var prevFn = function() {
	//让上一张淡出
	$('.imgList li').eq(num).stop().fadeOut(1000);
	num--;
	if(num < 0) {
		num = 3;
	}
	//让上一个角标增加current...
	$('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	//让下一张淡入
	$('.imgList li').eq(num).stop().fadeIn(1000);
}

$('.rightBtn').click(nextFn);
$('.leftBtn').click(prevFn);
$('.btnList li').click(function(event) {
	//num未修改前代表上一张
	$('.imgList li').eq(num).stop().fadeOut(1000);
	num = $(this).index();
	//num修改后代表下一张
	//让下一个角标增加current...
	$('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	//让下一张淡入
	$('.imgList li').eq(num).stop().fadeIn(1000);
});