const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);
console.log(window);

const btnBallNode = document.querySelector(".main__btn__ball");

btnBallNode.addEventListener("click", function () {
  btnBallNode.style.left = Math.random() * 1200 + "px";
  btnBallNode.style.top = Math.random() * 600 + "px";
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  btnBallNode.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  btnBallNode.style.width = Math.random() * 45 + 50 + "px";
  btnBallNode.style.height = Math.random() * 45 + 50 + "px";
  pressButtonBall();
});

function refreshPage() {
  window.location.reload();
}

let end;
let start;

function pressButtonBall() {
  if (timerControl.innerHTML == "Start") {
    timerControl.innerHTML = "Push";
    start = Date.now();
  } else {
    timerControl.innerHTML = "Start";
    end = Date.now();
    const timeScore = end - start;
    footerTimeScore.innerHTML = `<p class="footer__time__score"> Score: ${timeScore.toLocaleString()}</p>`;
    console.log(timeScore);
  }
}

const footerTimeScore = document.querySelector(".footer__time__score");
function updateTime() {}

// - Задачи
// - 1. Вывести текущее время
// - 2. Вывести текущее время в другом формате (часы минуты секунды) сначала вывести в консоль, потом вывод на экран
// - И с каждым кликом отображает временные параметры
// - Изменение формы шара при нажатии
// - Изменение цвета шара при нажатии
