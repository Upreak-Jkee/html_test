$(function() {
	//PC端鼠标浮动展示子导航
	$(".nav ul li").hover(
		function() {
			$(this).children('').next().stop(true, true).delay(0).slideDown(400);
		},
		function() {
			$(this).children('').next().stop(true, true).delay(300).slideUp(400);
		}
	);
	//点击逐渐展开移动端导航
	$(".mnav").click(
		function() {
			$(".mobile-menu").stop(true, false).delay(0).animate({
				width: "100%",
				height: "100%"
			}, 0);
			$(".mobile-menu").find(".div1").stop(true, false).delay(0).animate({
				opacity: "0.9"
			}, 500);
			$(".mobile-menu").find(".div2").stop(true, false).delay(0).animate({
				opacity: "1"
			}, 500);
			$(".mobile-menu").find(".div3").stop(true, false).delay(0).animate({
				right: "0"
			}, 500);
		}
	)
	//点击关闭，逐渐隐藏
	$(".a-closed").click(
		function() {
			$(".mobile-menu").stop(true, false).delay(500).animate({
				width: "0",
				height: "0"
			}, 0);
			$(".mobile-menu").find(".div1").stop(true, false).delay(0).animate({
				opacity: "0"
			}, 500);
			$(".mobile-menu").find(".div2").stop(true, false).delay(0).animate({
				opacity: "0"
			}, 500);
			$(".mobile-menu").find(".div3").stop(true, false).delay(0).animate({
				right: "-80%"
			}, 500);
		}
	)
	//点击顶级菜单展开关闭子导航
	$('.div3 ul li').click(function() {
		$('.down-menu:visible').slideUp().prev().removeClass('down-a_on');
		var subnav = $(this).find('.down-menu');
		console.log(subnav.is(':hidden'))
		if(subnav.is(':hidden')) {
			subnav.slideDown().prev().addClass('down-a_on');
		} else {
			subnav.slideUp().prev().removeClass('down-a_on');
		};
	})
	
	
	
	
	
	
	
	//定时器返回值
var time=null;
//记录当前位子
var nexImg = 0;
//用于获取轮播图图片个数
var imgLength = $(".czlkweixiu-banner .banner ul li").length;
//当时动态数据的时候使用,上面那个删除
// var imgLength =0;
//设置底部第一个按钮样式
$(".czlkweixiu-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");

//页面加载
$(document).ready(function(){
	// dynamicData();
	//启动定时器,设置时间为5秒一次
	time =setInterval(intervalImg,5000);
});

//点击上一张
$(".preImg").click(function(){
	//清楚定时器
	clearInterval(time);
	var nowImg = nexImg;
	nexImg = nexImg-1;
	console.log(nexImg);
	if(nexImg<0){
		nexImg=imgLength-1;
	}
	//底部按钮样式设置
	$(".czlkweixiu-banner .jumpBtn ul li").css("background-color","white");
	$(".czlkweixiu-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");
	
	//将当前图片试用绝对定位,下一张图片试用相对定位
	$(".czlkweixiu-banner .banner ul img").eq(nowImg).css("position","absolute");
	$(".czlkweixiu-banner .banner ul img").eq(nexImg).css("position","relative");
	
	//轮播淡入淡出
	$(".czlkweixiu-banner .banner ul li").eq(nexImg).css("display","block");
	$(".czlkweixiu-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$(".czlkweixiu-banner .banner ul li").eq(nowImg).stop().animate({"opacity":0},1000,function(){
		$(".czlkweixiu-banner ul li").eq(nowImg).css("display","none");
	});
	
	//启动定时器,设置时间为3秒一次
	time =setInterval(intervalImg,3000);
})

//点击下一张
$(".nexImg").click(function(){
	clearInterval(time);
	intervalImg();
	time =setInterval(intervalImg,3000);
})

//轮播图
function intervalImg(){
	if(nexImg<imgLength-1){
		nexImg++;
	}else{
		nexImg=0;
	}
	
	//将当前图片试用绝对定位,下一张图片试用相对定位
	$(".czlkweixiu-banner .banner ul img").eq(nexImg-1).css("position","absolute");
	$(".czlkweixiu-banner .banner ul img").eq(nexImg).css("position","relative");
	
	$(".czlkweixiu-banner .banner ul li").eq(nexImg).css("display","block");
	$(".czlkweixiu-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$(".czlkweixiu-banner .banner ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".czlkweixiu-banner .banner ul li").eq(nexImg-1).css("display","none");
	});
	$(".czlkweixiu-banner .jumpBtn ul li").css("background-color","white");
	$(".czlkweixiu-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");
}

//轮播图底下按钮
//动态数据加载的试用应放在请求成功后执行该代码,否则按钮无法使用
$(".czlkweixiu-banner .jumpBtn ul li").each(function(){
	//为每个按钮定义点击事件
	$(this).click(function(){
		clearInterval(time);
		$(".czlkweixiu-banner .jumpBtn ul li").css("background-color","white");
		jumpImg = $(this).attr("jumpImg");
		if(jumpImg!=nexImg){
			var after =$(".czlkweixiu-banner .banner ul li").eq(jumpImg);
			var befor =$(".czlkweixiu-banner .banner ul li").eq(nexImg);
			
			//将当前图片试用绝对定位,下一张图片试用相对定位
			$(".czlkweixiu-banner .banner ul img").eq(nexImg).css("position","absolute");
			$(".czlkweixiu-banner .banner ul img").eq(jumpImg).css("position","relative");
			
			after.css("display","block");
			after.stop().animate({"opacity":1},1000);
			befor.stop().animate({"opacity":0},1000,function(){
				befor.css("display","none");
			});
			nexImg=jumpImg;
		}
		$(this).css("background-color","black");
		time =setInterval(intervalImg,3000);
	});
});
});

 /*点击复制微信号*/
    function copywx(){
        const range = document.createRange();
        range.selectNode(document.getElementById('copy_content'));
        const selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        alert("复制成功！");
    }
    /*点击出现*/
    function showwx(){
        var ss=document.getElementById('myshow');
        ss.style.display='block';
    }
    /*关闭*/
    function closeshow(){
        var ss=document.getElementById('myshow');
        ss.style.display='none';
    }