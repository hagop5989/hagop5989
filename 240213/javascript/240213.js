window.onload=function() {
    // 앞의 skip은 변수 뒤의 skip은 element요소를 읽은것
    let skip=document.querySelector(".skip");
    let back=document.getElementById("back");

    skip.addEventListener("click",func_skip );
    
    function func_skip() {
        back.style.display="none";
    }
}


// $(".skip").on("click")