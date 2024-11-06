const countWrap = document.querySelector(".count-wrap");
const hrs = countWrap.querySelector(".hrs");
const min = countWrap.querySelector(".min");
const sec = countWrap.querySelector(".sec");
const startBtn = document.querySelector(".start");
const startSvg = document.querySelector(".start svg");
const resetBtn = document.querySelector(".reset");
const resetSvg = document.querySelector(".reset svg");

countWrap.addEventListener("input", (e) => {
  startBtn.classList.add("active");
  resetBtn.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  hrs.value = "00";
  min.value = "00";
  sec.value = "00";
});

startBtn.addEventListener("click",);
