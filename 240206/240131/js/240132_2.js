window.onload=function(){
    $(".right").hide();
    $("#right"+4).show();

}
// 함수는 window 안에서도 밖에써도 됨
let gno=0, sno;
$(function() {
    // 왼쪽 (주)메뉴 클릭
    $(".menu").on("click", function(){
        let gno=$(this).attr("class").substring(4, 5);
        $(".right").hide();
        $("#right"+gno).show();
    })
    // right4 속에 서브메뉴 클릭시 색상 바꾸기

    $(".right_menu li").on("click", function(){
        $(".right_menu li").css("background","white");
        $(this).css("background","lightgrey");
        $(this).css("color","black");

        gno=$(this).index();
        // console.log(gno);
        $(".right4_pic").attr("src", "img/menu"+gno+"_img0"+".jpg");
        // 메뉴이동시 좌측상단 첫그림을 큰그림으로 표시

        for(i=0; i<5; i++){
            $(".pic"+i).attr("src", "img/menu"+gno+"_img"+i+".jpg");
        }

    }) 

    // small 작은 그림 (왼쪽) 5개 중 하나를 클릭하면 right4_pic(오른쪽 큰그림)이 바뀜
    $(".right4_small li").on("click", function(){
        sno=$(this).index();
            $(".right4_pic").attr("src", "img/menu"+gno+"_img"+sno+".jpg");
    })



    // menu_no=$(this).index();
// attr = 속성 -> div class 에서 class가 속성, img src는 src가 속성
    


})