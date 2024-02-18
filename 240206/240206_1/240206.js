let i, menu;
// 합을 구하는 변수는 반드시 초기화 시켜야 함.
window.onload=function() {
    

    // let sum=0; let odd=0;
    // for(i=1; i<=100; i++) {
    //     if(i % 2 == 0)
    //         sum+=i;
    //     else
    //         odd+=i;
    // document.write("1~100까지의 짝수 합 :"+ sum);
    // document.write("<br>1~100까지의 홀수 합 :"+ odd);

    // 3단
    // for(i=1; i<10; i++){
    //     str+= "<br>"+ 3 +"*"+ i +"="+ 3*i;
    // }
    // box=document.querySelector(".box");
    // box.innerHTML = str;
    // html에 무엇을 써놓더라도 자바스크립트가 덮어씀


    // 원하는 숫자를 입력하고 확인을 클릭하면 해당 구구단 실행
    // let str="", box;
    // let dan, ok;
    // dan=document.querySelector(".dan");
    // ok=document.querySelector(".ok");
    // box=document.querySelector(".box");
    // ok.addEventListener("click", function() {
    //     str = "";
    //     console.log( dan.value );
    //     let gu = parseInt(dan.value);

    //     for(i=1; i<=9; i++){
    //         str += "<br>" + gu + " * " + i + " = " + gu*i;
    //     }
    //     box.innerHTML = str;
    // })

// 이하 자바스크립트

    menu=document.querySelector(".menu").getElementsByTagName("li")
    for(i=0; i<7; i++){
        menu[i].style.fontSize="1.3rem";
        menu[i].style.color="black";
        menu[i].style.background="lightgrey";
        // 여러개를 쓸때는 대괄호 []
    }
    
    let img7;
    img7=document.querySelector(".img7").getElementsByTagName("p");
    for(i=0; i<7; i++) {
        img7[i].style.background="url(img/img" + (i+1) + ".jpg)";
        img7[i].style.backgroundSize="100% 100%";        
    }        
    
}

// 이하 제이쿼리
        
$(function() {
        $(".menu").css("background", "#ccc");
    $(".menu li").on("click",function() {
        $(".menu li").css("background", "none").css("color","black");
        $(this).css({"background":"black", "color":"white"});
        
        
        
    })

    $(".img7 p").on("click",function(){
        var no=$(this).index();
        $(".pic").attr("src","img/img"+no+".jpg");
// attr = 속성 -> div class 에서 class가 속성, img src는 src가 속성
    })
    
})





