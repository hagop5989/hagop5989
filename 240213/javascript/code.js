const menuA=[
    "박장대소",
    "기립박수",
    "미소짓기",
    "박수웃음",
    "a",
    "b",
    "c",
];

let pic_textA=[
    "박장대소 합니다",
    "기립박수 합니다",
    "미소짓기 합니다",
    "박수웃음 합니다",
    "a 합니다",
    "b 합니다",
    "c 합니다",
];

window.onload=function() {
    for(i=0; i<menuA.length; i++) {
        $("nav div:eq("+ i +")").html(menuA[i]);
    }


}

let i=0, no=0;
$(function () {
    $("nav div").on("click",function(){
        no=$(this).index();
        $(".pic").attr("src","../img/bg"+ no +".jpg");
        $(".pic_text").html(pic_textA[no]);
        $(".pic_text:eq()").html(pic_textA[no]);
    })
})



// $(".skip").on("click")