let i=0,j, no, count=0;
window.onload=function() {
    // while(i<3) {
    //     document.write("자동차"+i);
    //     i++;
    // }



}

const repeatA=[
    "For",
    "Foreach",
    "For in",
    "For of",
    "Map",
    "while",
    "Do while"
];

const imgA=[
    "bg0.jpg",
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg6.jpg",
];

$(function () {
    // for(i=0;i<repeatA.length;i++){
    //     i++;
    // }
    while( true ) {
        $(".nav_sub:eq(" + i + ")").html(repeatA[i]);
        if(i>=repeatA.length)
            break;
        else{
            i++;
        }
    }
    // $(".menu_pic"+0).css("background","url(../img/bg0.jpg)")


    while(count < imgA.length) {
        // $(".menu_pic(" + i + ")").attr("src","")

        // $(".menu_pic"+ count)
        $(".menu_pic:eq(" + count + ")")
            .css("background","url(../img/"+imgA[count]+")").css("backgroundSize","100% 100%");
            count++;
        
    }

})



// $(".skip").on("click")