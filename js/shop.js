$(".shopBianji1").click(function(){
    $("#shopList1ContentLeft").css("display","none");
    $("#shopList1ContentLeft2").css("display","none");
    $(".shopBianji1").css("display","none");
    $("#shopList1ContentBianji").css("display","block");
    $("#shopList1ContentBianji2").css("display","block");
    $(".shopWancheng1").css("display","block")
});
$(".shopWancheng1").click(function(){
    $("#shopList1ContentBianji").css("display","none");
    $("#shopList1ContentBianji2").css("display","none");
    $(".shopWancheng1").css("display","none");
    $("#shopList1ContentLeft2").css("display","block");
    $("#shopList1ContentLeft").css("display","block");
    $(".shopBianji1").css("display","block")
});
$(".shopBianji2").click(function(){
    $("#shopList1ContentLeft3").css("display","none");
    $("#shopList1ContentLeft4").css("display","none");
    $("#shopList1ContentLeft5").css("display","none");
    $(".shopBianji2").css("display","none");
    $("#shopList1ContentBianji3").css("display","block");
    $("#shopList1ContentBianji4").css("display","block");
    $("#shopList1ContentBianji5").css("display","block");
    $(".shopWancheng2").css("display","block")
});
$(".shopWancheng2").click(function(){
    $("#shopList1ContentBianji3").css("display","none");
    $("#shopList1ContentBianji4").css("display","none");
    $("#shopList1ContentBianji5").css("display","none");
    $(".shopWancheng2").css("display","none");
    $("#shopList1ContentLeft3").css("display","block");
    $("#shopList1ContentLeft4").css("display","block");
    $("#shopList1ContentLeft5").css("display","block");
    $(".shopBianji2").css("display","block")
});

// 删除
$(".delete1").click(function(){
    $(".dellist1").css("display","none");
});
$(".delete2").click(function(){
    $(".dellist2").css("display","none");
});
$(".delete3").click(function(){
    $(".dellist3").css("display","none");
});
$(".delete4").click(function(){
    $(".dellist4").css("display","none");
});
$(".delete5").click(function(){
    $(".dellist5").css("display","none");
});

// 输出数量
function printNum1(){
    var num1=document.getElementById("nu1").value;
    var num2=document.getElementById("nu2").value;
    $('.number1').text(num1);
    $('.number2').text(num2);
}
function printNum2(){
    var num3=document.getElementById("nu3").value;
    var num4=document.getElementById("nu4").value;
    var num5=document.getElementById("nu5").value;
    $('.number3').text(num3);
    $('.number4').text(num4);
    $('.number5').text(num5);
}

//计算
$(function(){
    //购物车数量加减
    $(function() {
        $(".add").click(function () {
            var t = $(this).parent().find('input[class*=text_box]');
            t.val(parseInt(t.val()) + 1);
            setTotal();
        });
        $(".reduce").click(function () {
            var t = $(this).parent().find('input[class*=text_box]');
            t.val(parseInt(t.val()) - 1);
            if (parseInt(t.val()) < 0) {
                t.val(0);
            }
            setTotal();
        });
    });

    $(".goodsCheck").click(function() {
        var goods = $(this).closest(".shopList1").find(".goodsCheck");
        var goodsC = $(this).closest(".shopList1").find(".goodsCheck:checked");
        var Shops = $(this).closest(".shopList1").find(".shopCheck");
        if (goods.length === goodsC.length) {
            Shops.prop('checked', true);
            if ($(".shopCheck").length === $(".shopCheck:checked").length) {
                $("#AllCheck").prop('checked', true);
                TotalPrice();
            } else {
                $("#allCheck").prop('checked', false);
                TotalPrice();
            }
        } else {
            Shops.prop('checked', false);
            $("#allCheck").prop('checked', false);
            TotalPrice();
        }
    });
    $(".shopCheck").click(function() {
        if ($(this).prop("checked") === true) {
            $(this).parents(".shopList1").find(".goods-check").prop('checked', true);
            if ($(".shopCheck").length === $(".shopCheck:checked").length) {
                $("#allCheck").prop('checked', true);
                TotalPrice();
            } else {
                $("#allCheck").prop('checked', false);
                TotalPrice();
            }
        } else {
            $(this).parents(".shopList1").find(".goods-check").prop('checked', false);
            $("#allCheck").prop('checked', false);
            TotalPrice();
        }
    });
    // 点击全选按钮
    $("#allCheck").click(function() {
        if ($(this).prop("checked") === true) {
            $(".goods-check").prop('checked', true);
            TotalPrice();
        } else {
            $(".goods-check").prop('checked', false);
            TotalPrice();
        }
        $(".shopCheck").change();
    });

    //计算总价
    function TotalPrice() {
        var allprice = 0;
        $(".shopList1").each(function() {
            var oprice = 0;
            $(this).find(".goodsCheck").each(function() {
                if ($(this).is(":checked")) {
                    var num = parseInt($(this).parents(".shopList1Content").find(".num").text());
                    var price = parseFloat($(this).parents(".shopList1Content").find(".price").text());
                    var total = price * num;
                    allprice += total;
                }
            });
        });
        $("#AllTotal").text(allprice.toFixed(2));
    }
});