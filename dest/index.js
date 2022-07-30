const taskName = document.getElementById("task-name");
const taskImage = document.getElementById("image-url");
const taskDate = document.getElementById("task-date");
const taskBtn = document.getElementById("addTask");
const form = document.getElementById("form");
const streak_display = document.querySelector(".streak_display");
class allTask {
    constructor() {
        //console.log("task");
        this.taskArr = [];
    }
    AddTask(TaskItem) {
        this.taskArr.push(TaskItem);
    }
    GetTaskById(id) {
        return this.taskArr.find((streak) => streak.id === id);
    }
    GetAllTask() {
        return this.taskArr;
    }
    displayArr() {
        return this.taskArr;
    }
}
const tasks = new allTask();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let TaskItem = {
        id: Math.ceil(Math.random() * 100),
        name: taskName.value,
        image: taskImage.value,
        date: taskDate.value,
    };
    tasks.AddTask(TaskItem);
    form.reset();
    streak_display.innerHTML = displayStreak(tasks.displayArr());
});
const displayStreak = (data) => {
    return data.map((tasks) => ` <div class="streaks">
              <div class="streaks-image">${tasks.image}<div/>
              <div class="streaks-date">${tasks.name}<div/>
             <div class="streaks-name">${tasks.date}<div/>
        
           </div>`).join("");
};
export {};
