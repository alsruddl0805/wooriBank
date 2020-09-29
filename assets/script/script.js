// buttonArea
$("#mainBtn li").mouseover(function(){
    $(this).children(".subBtn").show();
});

$("#mainBtn li").mouseout(function(){
    $(this).children(".subBtn").hide();
});

// header GNB
$("#mainMenu>li").mouseover(function(){
    $(this).children(".subMenu").stop().show();
});

$("#mainMenu>li").mouseout(function(){
    $(this).children(".subMenu").stop().hide();
});

// footer LNB
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
var slideSet = setInterval(Slide, 2000);

function Slide() {
   $("#slideFrame a:first").fadeOut(2000,function(){
       $(this).insertAfter("#slideFrame a:last");
   });
   $("#slideFrame a:nth-child(2)").fadeIn(3000);
}

// colorSlideShow
var colorSet = setInterval(colorSlide, 2000);

function colorSlide() {
   $("#slideBack p:first").fadeOut(2000,function(){
       $(this).insertAfter("#slideBack p:last");
   });
   $("#slideBack p:nth-child(2)").fadeIn(3000);
}

// pause&play Slide
var pauseBtn = document.querySelector(".fa-pause");
pauseBtn.onclick = stopSlide;

var playBtn = document.querySelector(".fa-play");
playBtn.onclick = goSlide;
playBtn.style.display = "none";
playBtn.style.position = "relative";
playBtn.style.top = "10px";

function stopSlide() {
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    clearInterval(slideSet);
    clearInterval(colorSet);
}

function goSlide() {
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    pauseBtn.style.position = "relative";
    pauseBtn.style.top = "10px";
    setInterval(Slide,2000);
    setInterval(colorSlide,2000);
}

// slideDot
$("#slideDot li").click(function(){
    clearInterval(slideSet);
    clearInterval(colorSet);
});

$("#slideDot li:first-child").click(function(){
    $("#slideFrame a#one").fadeIn();
    $("#slideFrame a#two").fadeOut();
    $("#slideFrame a#three").fadeOut();
    $("#slideFrame a#four").fadeOut();

    $("p#slide_01").fadeIn();
    $("p#slide_02").fadeOut();
    $("p#slide_03").fadeOut();
    $("p#slide_04").fadeOut();
});

$("#slideDot li:nth-child(2)").click(function(){
    $("#slideFrame a#one").fadeOut();
    $("#slideFrame a#two").fadeIn();
    $("#slideFrame a#three").fadeOut();
    $("#slideFrame a#four").fadeOut();

    $("p#slide_01").fadeOut();
    $("p#slide_02").fadeIn();
    $("p#slide_03").fadeOut();
    $("p#slide_04").fadeOut();
});

$("#slideDot li:nth-child(3)").click(function(){
    $("#slideFrame a#one").fadeOut();
    $("#slideFrame a#two").fadeOut();
    $("#slideFrame a#three").fadeIn();
    $("#slideFrame a#four").fadeOut();

    $("p#slide_01").fadeOut();
    $("p#slide_02").fadeOut();
    $("p#slide_03").fadeIn();
    $("p#slide_04").fadeOut();
});

$("#slideDot li:nth-child(4)").click(function(){
    $("#slideFrame a#one").fadeOut();
    $("#slideFrame a#two").fadeOut();
    $("#slideFrame a#three").fadeOut();
    $("#slideFrame a#four").fadeIn();

    $("p#slide_01").fadeOut();
    $("p#slide_02").fadeOut();
    $("p#slide_03").fadeOut();
    $("p#slide_04").fadeIn();
});

const pager = document.querySelectorAll(".pager");

for (let i =0; i<pager.length; i++) {
    pager[i].addEventListener("click",function(){
       for (let j = 0; j<pager.length; j++) {
           pager[j].classList.remove("active");
       }
       this.classList.add("active");
    });
}
