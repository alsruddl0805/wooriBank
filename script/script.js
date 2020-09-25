// 로그인 & 공인인증 하위메뉴 구현
$("#mainBtn>li").mouseover(function(){
    $(this).children(".subBtn").stop().show();
});

$("#mainBtn>li").mouseout(function(){
    $(this).children(".subBtn").stop().hide();
});

// GNB 메뉴 구현
$("#mainMenu>li").mouseover(function(){
    $(this).children(".subMenu").stop().show();
});

$("#mainMenu>li").mouseout(function(){
    $(this).children(".subMenu").stop().hide();
});
