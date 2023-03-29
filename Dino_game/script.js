const dino = document.getElementById("dino"); //получаю в константу эл-т по его id из html
const cactus = document.getElementById("cactus"); //получаю в константу эл-т по его id из html

document.addEventListener("keydown", function (event) {
  jump(); //ф-ция jump будет добавлять класс jump (прописанный в css) нашему эл-ту
}); //добавили обработчик событий (будем срабатиывать по нажатию на пробел)
//
function jump() {
  //если у дино нет класса jump
  if (dino.classList != "jump") {
    //мы его добавляем
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
  // setTimeout - будет удалять класс jump(через каждые 300миллисекунд), чтобы можно было добавлять его снова и ф-ция прыжок была бесконечной
}
// метод setInterval позволяет вызывать ф-цию регулярно, повторяя вызов через определенный интервал времени
let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // parseUnt - метод, который из строки вытаскивает число (18px => 18), getComputedStyle(возвращает объект, содержащий значение всех css св-в эл-та, getpropValue(св-во которое д.б. обработано))
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER");
  }
}, 10);
