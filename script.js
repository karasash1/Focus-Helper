//التايمر والصوت
const clock= document.getElementById("timerDisplay");
const start = document.getElementById("startBtn");
const pause = document.getElementById("pauseBtn");
const reset = document.getElementById("resetBtn");
let time = 25 * 60;
let timer = null;
const doneSound = new Audio("Paper Slide.mp3");
const alarmSound = new Audio("Twitch.mp3");
//الثواني 
function showTime() {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    if (mins <10 ) mins = "0" + mins;
    if (secs <10 ) secs = "0" + secs;
    clock.textContent = mins + ":" + secs;
}
start.addEventListener("click", () => {
    if (timer) return;
    timer = setInterval(() => {
        if (time > 0) {
            time--;
            showTime();
        } else {
            clearInterval(timer);
            timer = null;
            alarmSound.play();
        }
    }, 1000);
//نعمل بوز للتايمر
});
pause. addEventListener("click", () => {
    clearInterval(timer);
    timer = null; 
//تصفير التايمر
});
reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    time = 25 * 60;
    showTime();
});
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");
const msg = document.getElementById("Continue");
const words = ["Continue", "Great job", "Be strong", "Keep going", "God with you", "unstoppable"];
let step = 0;
//نضيف مهمه جديده
addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;
    const li = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = text;
    const btns = document.createElement("div");
    btns.className = "task-actions";
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Finished";
    doneBtn.className = "finish-btn";
    doneBtn.addEventListener("click", () => {
        label.classList.add("completed");
          msg.textContent = words[step];
          step++;
          if (step >= words.length) {
            step = 0;
          }
          celebrate();
          doneSound.currentTime = 0;
          doneSound.play();
          setTimeout(() => {
            li.remove();
          }, 1500);

        setTimeout(() => {
            msg.textContent ="";
        }, 1500);
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
        li.remove();
    });
    btns.append(doneBtn, delBtn);
    li.append(label, btns);
    list.append(li);
    input.value = "";
});
//الورق الملون
function celebrate () {
    const colors = ["#1fc39f", "#2bc0ff", "#facc15", "#a855f7"];
    for (let i= 0; i<30; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti";
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.backgroundColor = randomColor;
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDuration = Math.random() * 1.5 + 1.5 + "s";
        document.body.append(piece);
        setTimeout(() => {
            piece.remove();
        }, 3000);
    }
}