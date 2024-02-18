window.onload=function(){
    

}
const backA=[
    "bg0.jpg",    
    "bg1.jpg",    
    "bg2.jpg",
    "bg3.jpg"
];

const textA=[
    "재화 용역 생산 면을 설계하고 통제함",    
    "목표를 위해 필요한 인적자본을 확보,개발,활용",    
    "시장 경제 또는 수요를 관리하는 경영학의 한 분야",
    "조직 자금을 조달하고 자금운용을 관리 행위",
    "이해관계자의 재산변동을 측정 분석하여 이해관계자에게 보고하는 시스템"
];

const textB=[
    "생산",
    "관리",
    "성공"
];

// 이하 제이쿼리
let sw=0; sw2=0;
$(function(){

    // 테스트 중 //
    for(i=0;i<textB.length;i++){
    $(".text li"+"i").html(textB[i])}

    // 테스트 중 //

    // $(".text3_sub_wrap .text3_sub_sub1 .text3_li_0").animate({"marginTop": "300px","marginLeft": "200px"},3000);
    // $(".text3_sub_wrap .text3_sub_sub1 .text3_li_1").animate({"marginTop": "0px","marginLeft": "50px"},3000);
    // $(".text3_sub_wrap .text3_sub_sub1 .text3_li_2").animate({"marginTop": "0px","marginLeft": "400px"},3000);


    $(".main1").show();
    $(".text1").hide();
    $(".text2").hide();
    $(".text3").hide();
    $(".next").hide();

    $("nav").on("click",function(){
        if(sw==0){
            $(".top_menu_sub").animate({"margin-top":"0px"},500);
            sw=1;
        }

        else {
            $(".top_menu_sub").animate({"margin-top":"-100px"},500);
            sw=0;
        }
    })
    


    $(".main1 h1").on("click",function(){
        $(".next").show();
        $(".main1").hide();
        $(".text1").show();
        $(".text1").animate({"margin-left":"0px"},1000)

        })
        
    
    var i=0;
    $(".next").on("click",function(){
            if(i===0){
                $(".text1").show();
                $(".text2").hide();
                $(".text3").hide();
                $(".text1").animate({"margin-left":"0px"},1000)
                i=1;}
                    
            else if(i===1){
                $(".text1").hide();
                $(".text2").show();
                $(".text3").hide();

                i=2;}
            
            else if(i===2){
                $(".text1").hide();
                $(".text2").show();
                $(".text3").hide();
                i=3;}

            else if(i===3){
                $(".text1").hide();
                $(".text2").hide();
                $(".text3").show();
                i=0;
            }
            });



            $(".text1 .text1_1 .text1_sub").on("click",function(){
                
                var no=0;
                no=$(this).index();
                
                $(".big_img").css("background", "url(img/"+ backA[no] + ")")
                .css("backgroundSize", "100% 100%");
            })

            $(".big_img").on("click",function(){
                $(".big_img").animate({"right":"100%"},1000);
                $(".big_img").css({"border-radius":"100%"});
                $(".big_img").animate({"right":"6%"},10);
            })

            $(".text2_sub").on("click",function(){
                var no=0;
                no=$(this).index();
                $(this).animate({
                },1000);
            })

            $(".detail0").on("click",function(){
                $(".main1").hide();
                $(".text1").show();
                $(".text2").hide();
                $(".text3").hide();
                $(".next").show();
            })

            $(".detail1").on("click",function(){
                $(".main1").hide();
                $(".text1").hide();
                $(".text2").show();
                $(".text3").hide();
                $(".next").show();
                
            })

            $(".detail2").on("click",function(){
                $(".main1").hide();
                $(".text1").hide();
                $(".text2").hide();
                $(".text3").show();
                $(".next").show();

                $(".text3_sub_wrap .text3_sub_sub1 .text3_li_0").animate({"marginTop": "300px", "marginLeft": "200px"}, 3000);
                $(".text3_sub_wrap .text3_sub_sub1 .text3_li_1").animate({"marginTop": "0px", "marginLeft": "50px"}, 3000);
                $(".text3_sub_wrap .text3_sub_sub1 .text3_li_2").animate({"marginTop": "0px", "marginLeft": "400px"}, 3000);

            })

            $(".detail3").on("click",function(){
                $(".main1").show();
                $(".text1").hide();
                $(".text2").hide();
                $(".text3").hide();
                $(".next").hide();
            })
            
            $(".text2_sub_sub").on("click",function(){

                $(".hidden1").css("z-index","99");
                $(".hidden1").animate({"opacity":"1"},500);
                i=0;
                
                let k;
                k=$(this).index();
                console.log(this);
                $(".hidden1").html(textA[k-1]);
                

            })


            // $(".main1").hide();
            // $(".text3").show();

    })

    // no=$(this).index();
    // $(".text2_sub").css("background","url(img/"+ backA[no] + ")");

