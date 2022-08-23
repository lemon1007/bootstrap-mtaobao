//        首页广告滑屏
var isTouch=('ontouchstart' in window);
if(isTouch){
    $(".carousel").on('touchstart', function(e){
        var that=$(this);
        var touch = e.originalEvent.changedTouches[0];
        var startX = touch.pageX;
        var startY = touch.pageY;
        $(document).on('touchmove',function(e){
            touch = e.originalEvent.touches[0] ||e.originalEvent.changedTouches[0];
            var endX=touch.pageX - startX;
            var endY=touch.pageY - startY;
            if(Math.abs(endY)<Math.abs(endX)){
                if(endX > 10){
                    $(this).off('touchmove');
                    that.carousel('prev');
                }else if (endX < -10){
                    $(this).off('touchmove');
                    that.carousel('next');
                }
                return false;
            }
        });
    });
    $(document).on('touchend',function(){
        $(this).off('touchmove');
    });
}

//倒计时
function countDown() {
    var timer = setInterval(function () {
        var time = new Date();
        var hours = time.getHours();
        var min = 60 - time.getMinutes() - 1;
        var second = 60 - time.getSeconds() - 1;
        $('.counts1').text(hours);
        $('.counts2').text(min);
        $('.counts3').text(second);
    }, 1000);
}
countDown();

//头部滑动
var myScroll;
$(document).ready(function(){
    myScroll = new IScroll('#wrapper', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
});

var w = $(window).width();
if(w > 540){
    $("#open").css("right",(w-540)/2 + "px");
}

$("#open").click(function(){
    var s = $("#soldottomOpen")[0].src;
    if(s[s.length-5] == "d"){
        $("#soldottomOpen").attr("src","../images/packup.png");
        $("#open").css("background-color","#eee");
        $("#openWrap").css("display","block");
    }
    else{
        $("#soldottomOpen").attr("src","../images/unfold.png");
        $("#open").css("background-color","#582d27");
        $("#openWrap").css("display","none");
    }
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

$("#dress").click(function(){
    $("#dress").css("background-color","#ff492d");
    $("#soldAll").css("background-color","#582d27");
    $("#soldIndex").css("display","none");
    $("#womenDress").css("display","block")
});
$("#soldAll").click(function(){
    $("#dress").css("background-color","#582d27");
    $("#soldAll").css("background-color","#ff492d");
    $("#soldIndex").css("display","block");
    $("#womenDress").css("display","none");
});