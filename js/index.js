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
//        倒计时
function countDown() {
    var timer = setInterval(function () {
        var time = new Date();
        var min = 60 - time.getMinutes()-1;
        var second = 60 - time.getSeconds()-1;
        $('.count2').text(min);
        $('.count3').text(second);
    },1000);
}
countDown();

// 首页滚动文字
function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
            marginTop: "-50px"
        }, 500,
        function() {
            $(this).css({
                marginTop: "0px"
            }).find("li:first").appendTo(this);
        });
}
$(document).ready(function() {
    setInterval('AutoScroll("#demo")', 2000)
});

//返回顶部
function returnTop() {
    var scrolltotop={
        setting:{
            startline:100, //起始行
            scrollto:0, //滚动到指定位置
            scrollduration:400, //滚动过渡时间
            fadeduration:[500,100] //淡出淡现消失
        },
        controlHTML:'<img src="../images/rereturnTop.png" style="width:100px; height:100px; border-radius:600px;" />', //返回顶部按钮
        controlattrs:{offsetx:55,offsety:220},//返回按钮固定位置
        anchorkeyword:"#top",
        state:{
            isvisible:false,
            shouldvisible:false
        },scrollup:function(){
            if(!this.cssfixedsupport){
                this.$control.css({opacity:0});
            }
            var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
            if(typeof dest=="string"&&jQuery("#"+dest).length==1){
                dest=jQuery("#"+dest).offset().top;
            }else{
                dest=0;
            }
            this.$body.animate({scrollTop:dest},this.setting.scrollduration);
        },keepfixed:function(){
            var $window=jQuery(window);
            var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
            var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
            this.$control.css({left:controlx+"px",top:controly+"px"});
        },togglecontrol:function(){
            var scrolltop=jQuery(window).scrollTop();
            if(!this.cssfixedsupport){
                this.keepfixed();
            }
            this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
            if(this.state.shouldvisible&&!this.state.isvisible){
                this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
                this.state.isvisible=true;
            }else{
                if(this.state.shouldvisible==false&&this.state.isvisible){
                    this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
                    this.state.isvisible=false;
                }
            }
        },init:function(){
            jQuery(document).ready(function($){
                var mainobj=scrolltotop;
                var iebrws=document.all;
                mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
                mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
                mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"返回顶部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
                $('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
                $(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
            });
        }
    };
    scrolltotop.init();
}
window.onload=returnTop();