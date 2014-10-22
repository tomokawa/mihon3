//PC・スマホ表示切替
$("head").append("<meta name='viewport' content="
	+($.cookie("switchScreen") == 1 ?
		"'width=1024'" :
		"'width=device-width'")
+" />");

$(document).ready(function() {
	$("#btnPC, #btnSP").click(function() {
		$.cookie("switchScreen", $(this).attr("id") == "btnPC" ? 1 : 0);
		location.reload();
		return false;
	});
});


var bRun = 0;

function runShuffleEffect() {
	bRun = 1;
	$('#text').shuffleEffect(20);
	setTimeout(function() {bRun = 0}, 2400);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30173032-2']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


//文字サイズ
$(function(){
	$('#btnS').click(function(){
		$('#moji_size').css('font-size','0.8em');
	});
});

$(function(){
	$('#btnM').click(function(){
		$('#moji_size').css('font-size','1em');
	});
});

$(function(){
	$('#btnL').click(function(){
		$('#moji_size').css('font-size','1.4em');
	});
});


//左右寄せ
$(function(){
	$('#btnLeft').click(function(){
		$('#btn').css({
			left:'0',
			right:'auto',
		});
		$('#btnLR').css({
			left:'auto',
			right:'0',
		});
		$('#btnLeft').css({
			display:'none',
		});
		$('#btnRight').css({
			display:'inline',
		});
	});
});

$(function(){
	$('#btnRight').click(function(){
		$('#btn').css({
			left:'auto',
			right:'0',
		});
		$('#btnLR').css({
			left:'0',
			right:'auto',
		});
		$('#btnLeft').css({
			display:'inline',
		});
		$('#btnRight').css({
			display:'none',
		});
	});
});

//メニュー展開
$(function(){
	$('ul.sub').hide();
	$('ul.nav li').hover(function(){
		$('ul:not(:animated)',this).slideDown('fast');
	},
	function(){
		$('ul',this).slideUp('fast');
	});
});

/*レスポンシブ画像切替(breakpoints.js)*/
$(function() {
	$(window).setBreakpoints({
		distinct: true,
		breakpoints: [ 1, 480 ]
	});
	
	$(window).bind('enterBreakpoint1',function() {
		$('.sp-img').each(function() {
			$(this).attr('src', $(this).data('img'));
		});
	});
	$(window).bind('enterBreakpoint480',function() {
		$('.sp-img').each(function() {
			$(this).attr('src', $(this).data('img').replace('_sp', '_pc'));
		});
	});
});

