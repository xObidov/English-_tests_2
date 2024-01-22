// let start = document.querySelector('.submit')
function mySubmit() {
  const element = document.querySelector(".second_page");
  const element_two = document.querySelector(".first_page");
  const element_tree = document.querySelector(".dowlod_btn");
  element_two.style.display = "none";
  element_tree.style.display = "none";
  element.style.display = "block";
  // saveData()
}
function myEnd() {
  const element_end = document.querySelector(".result_page");
  const element = document.querySelector(".second_page");
  element.style.display = "none";
  element_end.style.display = "block";
}

let currentIndex = 0; // Индекс текущего слова
let correctCount = 0; // Количество правильных ответов

function myResult() {
  const userInput = document.querySelector(".answer").value.toLowerCase();
  if (userInput.trim() === "") {
    alert("Ведите перевод!");
    return; // Stop further execution if the input is empty
  }

  console.log(userInput);
  const currentWord = words[currentIndex];
  const russianWordsLowercase = currentWord.russian.map((word) =>
    word.toLowerCase()
  );
  if (russianWordsLowercase.includes(userInput)) {
    correctCount++;
  }
  currentIndex++;
  document.querySelector(".answer").value = "";
  if (currentIndex < words.length) {
    document.querySelector(".word").textContent = words[currentIndex].english;
  } else {
    document.querySelector(".submit_two").disabled = true;
    // document.querySelector(".second_page").style.display = "none";
    console.log("savol tugadi");
  }
}

// Находим текстовое поле для ввода ответа
const answerInput = document.querySelector(".answer");

// Добавляем обработчик события keyup на текстовое поле
answerInput.addEventListener("keyup", function (event) {
  // Проверяем, нажата ли клавиша Enter (код клавиши 13)
  if (event.key === "Enter") {
    // Вызываем функцию myResult() при нажатии Enter в текстовом поле
    myResult();
  }
});

function myEnd() {
  // alert("Вы ответили правильно на " + correctCount + " слов(а)");
  const elementEnd = document.querySelector(".second_page");
  const elementResult = document.querySelector(".result_page");
  const trueResult = document.querySelector(".true");
  elementEnd.style.display = "none";
  elementResult.style.display = "block";
  trueResult.textContent = correctCount;
}

function myDowlodbtn() {
  const loadingElem = document.querySelector(".dowlod_page");
  const loading_two = document.querySelector(".first_page");
  const backBtn = document.getElementById("myDowbtn");

  loading_two.style.display = "none";
  loadingElem.style.display = "block";
  backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
}

function returnBtn() {
  const element = document.querySelector(".second_page");
  const resultPage = document.querySelector(".result_page");
  resultPage.style.display = "none";
  element.style.display = "block";
}

function changeBackground() {
  const body = document.body;

  // Получите текущий класс фона
  const currentBackgroundClass = getCurrentBackgroundClass(body);

  // Смените класс фона на следующий
  const nextBackgroundClass = getNextBackgroundClass(currentBackgroundClass);
  body.classList.remove(currentBackgroundClass);
  body.classList.add(nextBackgroundClass);
}

function getCurrentBackgroundClass(element) {
  return (
    Array.from(element.classList).find(
      (cls) => cls.startsWith("background") && cls !== "background"
    ) || "background1"
  );
}

function getNextBackgroundClass(currentClass) {
  const currentNumber = parseInt(
    currentClass.replace("background", "") || "1",
    10
  );
  const totalBackgrounds = 3; // Общее количество фоновых классов

  // Вычислите следующий номер класса фона с учетом общего количества
  const nextNumber = (currentNumber % totalBackgrounds) + 1;

  return `background${nextNumber}`;
}
