const img_at0A = [
    "at0_0.jpg",
    "at0_1.jpg",
    "at0_2.jpg"
]
const img_at1A = [
    "at1_0.jpg",
    "at1_1.jpg"
]

$(function() {
    for(i = 0; i < 3; i++) {
        $(".at0 .at0_"+i+" .at_img img").attr("src", img_at0A[i]);
        $(".at1 .at1_"+i+" .at_img img").attr("src", img_at1A[i]);
    }
    menu_show();
    subMenu_click();
    left_menu_click();
    logo_click();
    main_title_click();
})

/*-----------------------------------------------*/ 
/* 메인메뉴 함수 */
function menu_show() {
    // $(".main_menu p").on("mouseenter", function() {
    //     $(".sub_menu").css("display", "flex");
    // })

    $(".sub_menu").on("mouseenter", function() {
        $(this).css("display", "flex");
    })
    $(".main_menu p").on("mouseleave", function() {
        $(".sub_menu").css("display", "none");
    })
    $(".sub_menu").on("mouseleave", function() {
        $(this).css("display", "none");
    })
}

/* sub메뉴 함수 */
function subMenu_click() {
    $(".title_at0 p").on("click", function() {
        no = $(this).index();
        $(".sub_menu").css("display", "none");
        $(".source_at div").hide();
        $(".at0 div").hide();
        $(".at1 div").hide();
        $(".at0 .at0_" + no).show();
        $(".left_menu .left_menu_at1").css({"left":"-200px"});
        $(".left_menu .left_menu_at0").animate({"left":"0"});
        $(".wrap").css({"background":"url(bg_exercise.jpg)",
                        "backgroundSize":"100% 100%"});
    })
    $(".title_at1 p").on("click", function() {
        no = $(this).index();
        $(".sub_menu").css("display", "none");
        $(".source_at div").hide();
        $(".at0 div").hide();
        $(".at1 div").hide();
        $(".at1 .at1_" + no).show();
        $(".left_menu .left_menu_at0").css({"left":"-200px"});
        $(".left_menu .left_menu_at1").animate({"left":"0"});
        $(".wrap").css({"background":"url(bg_food.jpg)",
        "backgroundSize":"100% 100%"});
    })
    $(".source").on("click", function() {
        no = $(this).index();
        $(".sub_menu").css("display", "none");
        $(".at0 div").hide();
        $(".at1 div").hide();
        $(".source_at div").hide();
        $(".source_at_text").show();
        $(".left_menu div").animate({"left":"-200px"});
    })
}

/* 로고 클릭 */
function logo_click() {
    $(".logo").on("click", function() {
        $(".source_at div").hide();
        $(".at0 div").hide();
        $(".at1 div").hide();
        $(".left_menu div").animate({"left":"-200px"});
        $(".wrap").css({"background":"url(main_bg1.jpg)",
        "backgroundSize":"100% 100%"});
    })
}

/* 왼쪽 메뉴 클릭 */
function left_menu_click() {
    $(".left_menu_at0 p").on("click", function() {
        no = $(this).index()-1;
        $(".sub_menu").css("display", "none");
        $(".source_at div").hide();
        $(".at0 div").hide();
        $(".at1 div").hide();
        $(".at0 .at0_" + no).show();
        $(".left_menu .left_menu_at1").css({"left":"-200px"});
        $(".left_menu .left_menu_at0").animate({"left":"0"});
        $(".wrap").css({"background":"url(bg_exercise.jpg)",
                        "backgroundSize":"100% 100%"});
    })
    $(".left_menu_at1 p").on("click", function() {
        no = $(this).index()-1;
        $(".sub_menu").css("display", "none");
        $(".source_at div").hide();
        $(".at0 div").hide();
        $(".at1 div").hide();
        $(".at1 .at1_" + no).show();
        $(".left_menu .left_menu_at0").css({"left":"-200px"});
        $(".left_menu .left_menu_at1").animate({"left":"0"});
        $(".wrap").css({"background":"url(bg_food.jpg)",
        "backgroundSize":"100% 100%"});
    })
}

/* 메인 메뉴 클릭 */
function main_title_click() {
    $("header .main_menu p:nth-child(1)").on("click", function() {
        $(".wrap").css({"background":"url(bg_exercise.jpg)",
        "backgroundSize":"100% 100%"});
        $(".left_menu .left_menu_at1").css({"left":"-200px"});
        $(".left_menu .left_menu_at0").animate({"left":"0"});
        $(".sub_menu").css("display", "none");
        $(".source_at div").hide();
        $(".at0 div").hide();
        $(".at1 div").hide();
    })
    $("header .main_menu p:nth-child(2)").on("click", function() {
        $(".wrap").css({"background":"url(bg_food.jpg)",
        "backgroundSize":"100% 100%"});
        $(".left_menu .left_menu_at0").css({"left":"-200px"});
        $(".left_menu .left_menu_at1").animate({"left":"0"});
        $(".sub_menu").css("display", "none");
        $(".source_at div").hide();
        $(".at0 div").hide();
        $(".at1 div").hide();
    })
    $(".left_menu_at0 .left_menu_title").on("click", function() {
        $(".wrap").css({"background":"url(bg_exercise.jpg)",
                        "backgroundSize":"100% 100%"});
    })
    $(".left_menu_at1 .left_menu_title").on("click", function() {
        $(".wrap").css({"background":"url(bg_food.jpg)",
                        "backgroundSize":"100% 100%"});
    })

}