// // 로그인 & 공인인증 하위메뉴 구현
$("#mainBtn li").mouseover(function(){
    $(this).children(".subBtn").show();
});

$("#mainBtn li").mouseout(function(){
    $(this).children(".subBtn").hide();
});

// header GNB 메뉴 구현
$("#mainMenu>li").mouseover(function(){
    $(this).children(".subMenu").stop().show();
});

$("#mainMenu>li").mouseout(function(){
    $(this).children(".subMenu").stop().hide();
});

// footer LNB 메뉴 구현
$("#footerMainMenu>li").mouseover(function(){
    $(this).children(".footerSubMenu").stop().show();
});

$("#footerMainMenu>li").mouseout(function(){
    $(this).children(".footerSubMenu").stop().hide();
});

// footer infoImg hover
$("#infoImg>a").mouseover(function(){
    $(this).children("span").stop().show();
});

$("#infoImg>a").mouseout(function(){
    $(this).children("span").stop().hide();
});

// slideShow

setInterval(fnSlide, 4000);

function fnSlide() {
   $("#slideFrame").animate(
                               {"margin-left": "-980px"},
                               2000,
                               function(){
                                   $("#slideFrame").css({"margin-left": "0"});
                                   $("#slideFrame>a:first").insertAfter("#slideFrame>a:last");
                               }
                           );
}
