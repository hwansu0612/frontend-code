$(document).ready(function () {
  // 헤더(.main-container) 바로 다음에 오는 div를 슬라이더의 컨테이너로 선택
  const sliderContainer = $(".main-container + div");
  let currentIndex = 0;
  const sliderTrack = sliderContainer.find("ul");
  const slides = sliderContainer.find("li");
  const slideCount = slides.length;
  // 특정 슬라이드로 이동하는 함수
  function goToSlide(index) {
    // 다음 슬라이드가 마지막을 넘어가면 처음으로, 처음 이전이면 마지막으로 이동
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    // 슬라이드 트랙(ul)을 이동시켜 이미지를 변경
    const percentage = -(index * 100) / slideCount;
    sliderTrack.css("transform", `translateX(${percentage}%)`);
    currentIndex = index;
  }
  // 5초마다 자동으로 다음 슬라이드로 이동
  setInterval(function () {
    goToSlide(currentIndex + 1);
  }, 5000);
});
