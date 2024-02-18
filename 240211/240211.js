window.onload = function () {};
// 헤더 정의 부분
const asideA_a0 = ["사전적 정의", "나만의 정의", ""];
const asideA_a1 = ["경제학", "마케팅", "재무회계 등"];
const asideA_a2 = [
  "경제학 관련 기법",
  "마케팅 관련 기법",
  "재무회계 등 관련 기법",
];
const asideA_a3 = ["조직", "관리", "운영"];
const asideA_a4 = [
  "기업의 조직과 관리 운영에 관하여 ",
  "과학적으로 연구하는 개별적인 학문",
];
const asideA_b3 = ["자원운영", "효율성", "효과성"];
const asideA_b4 = [
  "주어진 자원을 운영하여 ",
  "효율적이고 효과적으로 목표를 달성하는 것",
];
// 헤더 정의 부분

// 헤더 세부학문 부분
const asideB_a1 = ["수요", "공급", "수요공급 법칙"];
const asideB_a1_0 = [
  "수요와 공급의 균형점을 찾고",
  "둘의 상관관계를 밝히는 것과 관련한 학문",
];
const asideB_a2 = ["니즈파악", "시장조사", "해결책 제시"];
const asideB_a2_0 = [
  "시장조사를 통해 소비자의 니즈를 파악하여",
  "소비자가 원하는 해결책을 제시한다",
];
const asideB_a3 = ["경영활동 파악", "외부공표", "재무제포"];
const asideB_a3_0 = [
  "기업의 경영활동을 외부에 공표할 목적으로 ",
  "재무제표라는 회계 보고서를 기록, 분류, 정리, 작성",
];
// 헤더 세부학문 부분

// 헤더 분석기법 부분
const asideC_a1 = ["수요공급의 법칙", "보이지 않는 손", "정보의 비대칭"];
const asideC_a1_0 = [
  "수요 공급 법칙 하에 생기는 여러 현상들을",
  "경제학의 관점에서 분석한다",
];
const asideC_a2 = ["STP", "SWOP분석", "4P분석"];
const asideC_a2_0 = [
  "끊임없이 변동하는 시장에서",
  "소비자의 니즈를 여러 기법을 통해 파악하고 해결한다",
];
const asideC_a3 = ["대차평균의 원칙", "거래의 이중성", "분개 원칙"];
const asideC_a3_0 = [
  "재무, 회계적 올바른 정보 전달을 위해 ",
  "정확한 정보를 기록하는 기법을 구사한다",
];
// 헤더 분석기법 부분

// 이하 제이쿼리
$(function () {
  let i;

  // 주요 사용 함수
  function 페이지보여주기(arr1, arr2) {
    $(".at1_p0").html(arr1[0]).css("opacity",0).animate({ "opacity": 1 }, 1000);
    $(".at1_p1").html(arr1[1]).css("opacity",0).animate({ "opacity": 1 }, 1000);
    $(".at1_p2").html(arr1[2]).css("opacity",0).animate({ "opacity": 1 }, 1000);
    $(".at2_0").html(arr2[0]).css("opacity",0).animate({ "opacity": 1 }, 3000);
    $(".at2_1").html(arr2[1]).css("opacity",0).animate({ "opacity": 1 }, 3000);    
  }

  function asideShow(arr1) {
    $("aside").animate({ marginLeft: "0" }, 500);
    $("aside .aside_sub0").html(arr1[0]);
    $("aside .aside_sub1").html(arr1[1]);
    $("aside .aside_sub2").html(arr1[2]);
  }

  function bgChange(src) {
    $(".at0").css({
      background: src,
      backgroundSize: "100% 100%",
      transition: "background 1s",
    });
  }
  // 주요 사용 함수

  // 헤더 정의 부분
  $(".header_sub0").on("mouseenter", function () {
    bgChange("url(bg3.jpg");
    asideShow(asideA_a0);
    i = 0;
  });

  $(".aside_sub0").on("mouseenter", function () {
    if (i == 0) {
      페이지보여주기(asideA_a3, asideA_a4);
    }
  });

  $(".aside_sub1").on("mouseenter", function () {
    if (i == 0) {
      페이지보여주기(asideA_b3, asideA_b4);
    }
  });

  // 헤더 세부학문 부분
  $(".header_sub1").on("mouseenter", function () {
    bgChange("url(bg6.jpg");
    asideShow(asideA_a1);
    i = 1;
  });

  $(".aside_sub0").on("mouseenter", function () {
    if (i == 1) {
      페이지보여주기(asideB_a1, asideB_a1_0);
    }
  });

  $(".aside_sub1").on("mouseenter", function () {
    if (i == 1) {
      페이지보여주기(asideB_a2, asideB_a2_0);
    }
  });

  $(".aside_sub2").on("mouseenter", function () {
    if (i == 1) {
      페이지보여주기(asideB_a3, asideB_a3_0);
    }
  });
  // 헤더 세부학문 부분

  // 헤더 분석기법 부분
  $(".header_sub2").on("mouseenter", function () {
    bgChange("url(bg7.jpg");
    asideShow(asideA_a2);
    i = 2;
  });

  $(".aside_sub0").on("mouseenter", function () {
    if (i == 2) {
      페이지보여주기(asideC_a1, asideC_a1_0);
    }
  });

  $(".aside_sub1").on("mouseenter", function () {
    if (i == 2) {
      페이지보여주기(asideC_a2, asideC_a2_0);
    }
  });

  $(".aside_sub2").on("mouseenter", function () {
    if (i == 2) {
      페이지보여주기(asideC_a3, asideC_a3_0);
    }
  });
});
