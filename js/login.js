// 账户验证
function check() {
    var name=form1.username.value;
    var pwd=form1.password.value;
    if((pwd=="")||(name=="")){
        alert("用户名或密码不可为空！");
        form1.user.focus();
        return;
    }else if((pwd=="12")&&(name=="wm")){
        form1.submit();
        window.location.href="html/index.html";
    }else {
        alert("用户名或密码错误！");
        form1.user.focus();
        return;
    }
}

// 顶部关闭
$(".loginTopClose").click(function(){
    $(".loginTop").css("display","none");
});