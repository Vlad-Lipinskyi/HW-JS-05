// 1 Завдання
const buttonEL = document.querySelector(".game-button");
const textEl = document.querySelector(".game-status");
const keyEl = document.getElementById("key");
const keys = ["a", "b", "c", "d", "f", "g", "1", "2", "3", "0"];
let currentKeyIndex = 0;

buttonEL.addEventListener("click", () => {
  if (textEl.textContent !== "Гра почалась") {
    currentKeyIndex = 0;
    keyEl.textContent = keys[currentKeyIndex]; 

    textEl.textContent = "Гра почалась";
    buttonEL.textContent = "Закінчити гру"; 

    document.addEventListener("keydown", onKeyDown);
  } else {
    textEl.textContent = "Гра завершена";
    keyEl.textContent = ""; 
    buttonEL.textContent = "Почати гру"; 

    document.removeEventListener("keydown", onKeyDown); 
  }
});

function onKeyDown(event) {
  event.preventDefault();
  if (keyEl.textContent === event.key) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      keyEl.textContent = keys[currentKeyIndex];
    } else {
      textEl.textContent = "Вітаємо! Ви виграли!";
      buttonEL.textContent = "Перезапустити гру"; 
      document.removeEventListener("keydown", onKeyDown);
    }
  } else {
    PNotify.error({
      text: "Ви натиснули не ту кнопку!",
    });
  }
}

// 2 Завдання
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    
  },
};

const salesChart = new Chart(document.getElementById("sales-chart"), config);