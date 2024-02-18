window.onload=function(){
  
};
// 헤더 정의 부분 
const asideA_a0=[
  "사전적 정의",
  "나만의 정의",
  ""
];

const asideA_a1=[
  "경제학",
  "마케팅",
  "재무회계 등"
];

const asideA_a2=[
  "경제학 관련 기법",
  "마케팅 관련 기법",
  "재무회계 등 관련 기법"
];

const asideA_a3=[
  "조직",
  "관리",
  "운영"
];

const asideA_a4=[
  "기업의 조직과 관리 운영에 관하여 ",
  "과학적으로 연구하는 개별적인 학문"
];

const asideA_b3=[
  "자원운영",
  "효율성",
  "효과성"
];

const asideA_b4=[
  "주어진 자원을 운영하여 ",
  "효율적이고 효과적으로 목표를 달성하는 것"
];
// 헤더 정의 부분 


// 헤더 세부학문 부분 


const asideB_a1=[
  "수요",
  "공급",
  "수요공급 법칙"
];
const asideB_a1_0=[
  "수요와 공급의 균형점을 찾고",
  "둘의 상관관계를 밝히는 것과 관련한 학문"
];
const asideB_a2=[
  "니즈파악",
  "시장조사",
  "해결책 제시"
];
const asideB_a2_0=[
  "시장조사를 통해 소비자의 니즈를 파악하여",
  "소비자가 원하는 해결책을 제시한다"
];
const asideB_a3=[
  "경영활동 파악",
  "외부공표",
  "재무제포"
];
const asideB_a3_0=[
  "기업의 경영활동을 외부에 공표할 목적으로 ",
  "재무제표라는 회계 보고서를 기록, 분류, 정리, 작성"
];
// 헤더 세부학문 부분 


// 헤더 분석기법 부분 
const asideC_a1=[
  "수요공급의 법칙",
  "보이지 않는 손",
  "정보의 비대칭"
];
const asideC_a1_0=[
  "수요 공급 법칙 하에 생기는 여러 현상들을",
  "경제학의 관점에서 분석한다"
];
const asideC_a2=[
  "STP",
  "SWOP분석",
  "4P분석"
];
const asideC_a2_0=[
  "끊임없이 변동하는 시장에서",
  "소비자의 니즈를 여러 기법을 통해 파악하고 해결한다"
];
const asideC_a3=[
  "대차평균의 원칙",
  "거래의 이중성",
  "분개 원칙"
];
const asideC_a3_0=[
  "재무, 회계적 올바른 정보 전달을 위해 ",
  "정확한 정보를 기록하는 기법을 구사한다"
];
// 헤더 분석기법 부분 




// 이하 제이쿼리

$(function(){
  let i, j;
// aside 관련 //
// 헤더 정의 부분
  $(".header_sub0").on("mouseenter",function(){
    // "backgroundSize":"100% 100%"
    $(".at0").css({"background":"url(../240208/img/bg3.jpg",
                   "backgroundSize":"100% 100%",
                   "transition": "background 1s"});
                   
    $("aside").animate({"marginLeft":"0"},500);
    $("aside .aside_sub0").html(asideA_a0[0]);
    $("aside .aside_sub1").html(asideA_a0[1]);
    $("aside .aside_sub2").html(asideA_a0[2]);
    i=0,j=0;
  })

  $(".aside_sub0").on("mouseenter",function(){
    if(i==0,j==0){
      $(".at1_p0").html(asideA_a3[0]);
      $(".at1_p1").html(asideA_a3[1]);
      $(".at1_p2").html(asideA_a3[2]);
      $(".at2_0").html(asideA_a4[0]);
      $(".at2_1").html(asideA_a4[1]);
    }
  })

  $(".aside_sub1").on("mouseenter",function(){
    if(i==0,j==0){
      $(".at1_p0").html(asideA_b3[0]);
      $(".at1_p1").html(asideA_b3[1]);
      $(".at1_p2").html(asideA_b3[2]);
      $(".at2_0").html(asideA_b4[0]);
      $(".at2_1").html(asideA_b4[1]);
    }
  })



// 헤더 세부학문 부분
  $(".header_sub1").on("mouseenter",function(){
    $(".at0").css({"background":"url(../240208/img/bg2.jpg","backgroundSize":"100% 100%"});
    $("aside").animate({"marginLeft":"0"},500);
    $("aside .aside_sub0").html(asideA_a1[0]);
    $("aside .aside_sub1").html(asideA_a1[1]);
    $("aside .aside_sub2").html(asideA_a1[2]);
    i=1;j=1;
  })

  $(".aside_sub0").on("mouseenter",function(){
    if(i==1,j==1){
      $(".at1_p0").html(asideB_a1[0]);
      $(".at1_p1").html(asideB_a1[1]);
      $(".at1_p2").html(asideB_a1[2]);
      $(".at2_0").html(asideB_a1_0[0]);
      $(".at2_1").html(asideB_a1_0[1]);
    }
  })

  $(".aside_sub1").on("mouseenter",function(){
    if(i==1,j==1){
      $(".at1_p0").html(asideB_a2[0]);
      $(".at1_p1").html(asideB_a2[1]);
      $(".at1_p2").html(asideB_a2[2]);
      $(".at2_0").html(asideB_a2_0[0]);
      $(".at2_1").html(asideB_a2_0[1]);
    }
  })

  $(".aside_sub2").on("mouseenter",function(){
    if(i==1,j==1){
      $(".at1_p0").html(asideB_a3[0]);
      $(".at1_p1").html(asideB_a3[1]);
      $(".at1_p2").html(asideB_a3[2]);
      $(".at2_0").html(asideB_a3_0[0]);
      $(".at2_1").html(asideB_a3_0[1]);
    }
  })
// 헤더 세부학문 부분



// 헤더 분석기법 부분
  $(".header_sub2").on("mouseenter",function(){
    $(".at0").css({"background":"url(../240208/img/img16.jpg","backgroundSize":"100% 100%"});
    $("aside").animate({"marginLeft":"0"},500);
    $("aside .aside_sub0").html(asideA_a2[0]);
    $("aside .aside_sub1").html(asideA_a2[1]);
    $("aside .aside_sub2").html(asideA_a2[2]);
    i=2;j=2;
  })

  $(".aside_sub0").on("mouseenter",function(){
    if(i==2,j==2){
      $(".at1_p0").html(asideC_a1[0]);
      $(".at1_p1").html(asideC_a1[1]);
      $(".at1_p2").html(asideC_a1[2]);
      $(".at2_0").html(asideC_a1_0[0]);
      $(".at2_1").html(asideC_a1_0[1]);
    }
  })

  $(".aside_sub1").on("mouseenter",function(){
    if(i==2,j==2){
      $(".at1_p0").html(asideC_a2[0]);
      $(".at1_p1").html(asideC_a2[1]);
      $(".at1_p2").html(asideC_a2[2]);
      $(".at2_0").html(asideC_a2_0[0]);
      $(".at2_1").html(asideC_a2_0[1]);
    }
  })

  $(".aside_sub2").on("mouseenter",function(){
    if(i==2,j==2){
      $(".at1_p0").html(asideC_a3[0]);
      $(".at1_p1").html(asideC_a3[1]);
      $(".at1_p2").html(asideC_a3[2]);
      $(".at2_0").html(asideC_a3_0[0]);
      $(".at2_1").html(asideC_a3_0[1]);
    }
  })

// 헤더 정의 부분
// $(function 배경바꾸기(){
//   $(".header_main").css("color","red");
// })

// $(배경바꾸기);
// // $(경고창);

// 헤더 분석기법 부분


  // $(".header_subsub").on("mouseleave",function(){
  //   $("aside").animate({"marginLeft":"-500px"},500);
  // })

  


// aside 관련 //

})