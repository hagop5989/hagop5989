let i=0,j, no, count=0;

const imgtextA=[
    "bg0.jpg",
    "bg1.jpg",
    "bg2.jpg"
];

const pic_btn_textA=[
    "아메리카노",
    "카페라떼",
    "프라푸치노",
    "카페모카",
    "말차라떼",
    "아이스티",
    "블랙티",
    "스무디",
    "아이스크림",
    "허니브레드",
];

window.onload=function() {
    let pic_btn=document.querySelector(".picpic").getElementsByTagName("li");
    for(i=0; i<pic_btn_textA.length; i++) {
        pic_btn[i].innerHTML = pic_btn_textA[i];
}
}

$(function () {
    // for(i=0;i<pic_btn_textA.length;i++)
    // {
    //     $(".pic_btn"+ i).html(pic_btn_textA[i]);
    // }

    $(".picpic li").on("click", function(){
        $(".move").animate({"left":"130%"},1500);

        no=$(this).index();
        $(".move img").attr("src","../img/bg"+ no +".jpg");
    })

})



// $(".skip").on("click")