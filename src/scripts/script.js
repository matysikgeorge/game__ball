const mainScreen = document.documentElement;
const mainScreenWidth = mainScreen.clientWidth;
const mainScreenHeight = mainScreen.clientHeight;

// console.log(mainScreenWidth);
// console.log(mainScreenHeight);
// console.log(window);

const sunWrapperNode = document.querySelector(".sun__wrapper");

const viewportWidth = window.innerWidth - sunWrapperNode;
const viewportHeight = window.innerHeight;
console.log(viewportWidth, viewportHeight);

const timerScoreNode = document.querySelector(".timer__score"); // - переменная счетчика времени
const sunButtonNode = document.querySelector(".sun__button"); // переменная мячика

//- Создаем слушатель события при нажатии на мячик
sunButtonNode.addEventListener("click", function () {
  sunButtonNode.style.left = Math.random() * 1200 + "px";
  sunButtonNode.style.top = Math.random() * 600 + "px";
  // const r = Math.floor(Math.random() * 256); // - Изменение цвета случайным образом
  // const g = Math.floor(Math.random() * 256);
  // const b = Math.floor(Math.random() * 256);
  // sunButtonNode.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  const size = Math.random() * 50 + 50 + "px"; // - Изменение диаметра круга случайным образом
  sunButtonNode.style.width = size;
  sunButtonNode.style.height = size;
  pressButtonSun();
});

// - Функция сброса игры/перезагрузки страницы
function refreshPage() {
  window.location.reload();
}

// - Функция отсчета времени
function pressButtonSun() {
  if (timerControl.innerHTML == "start") {
    timerControl.innerHTML = "Push";
    start = Date.now();
  } else {
    timerControl.innerHTML = "start";
    end = Date.now();
    const timer = (end - start) / 1000;
    timerScoreNode.innerText = `Timer: ${timer.toLocaleString()} s`;
    // console.log(timer);
  }
}

function updateTime() {}

// - Задачи
// - 1. Вывести текущее время
// - 2. Вывести текущее время в другом формате (часы минуты секунды) сначала вывести в консоль, потом вывод на экран
// - И с каждым кликом отображает временные параметры
// - Изменение формы шара при нажатии
// - Изменение цвета шара при нажатии
