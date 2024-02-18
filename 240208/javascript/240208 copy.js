window.onload=function(){

}

const bgA=[
    "img01.jpg","img02.jpg",
    "img03.jpg","img04.jpg",
    "img05.jpg","img06.jpg"
]


// 이하 제이쿼리

let x, y;
$(function() {
    $(".bg").on("dblclick",function() {
        $("nav").css("top","0");
    })
    i=0;
    function func_rand() {
        for(i; i<5; i++) {
            x=parseInt(Math.random()*2000) + 100; // 100~2000 사이의 숫자를 만든다.
            y=Math.random()*700 + 50; // 700~50 사이의 숫자를 만든다.    
            $(".box" + i).css({"top":"x", "left":"y"});
        }}
        func_rand();
    })