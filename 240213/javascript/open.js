window.onload=function() {


}

const textA=[
    "아메리카노",
    "카푸치노",
    "카페라떼",
    "스무디",
    "아이스티",
];

const textB=[
    "아메리카노 입니다.",
    "카푸치노 입니다.",
    "카페라떼 입니다.",
    "스무디 입니다.",
    "아이스티 입니다.",
];

let i=0, no=0;
$(function () {

    for(i=0;i<textA.length;i++){
        $(".nav_sub"+i).html(textA[i])
    };
    
    $(".nav_sub").on("click",function(){

        no=$(this).index();
        $(".big").css({
            background:"url(../img/bg"+no+".jpg)",
            backgroundSize: "100% 100%",})
        $(".big_text").html(textB[no]);
    })
})



// $(".skip").on("click")