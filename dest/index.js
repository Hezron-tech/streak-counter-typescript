const taskName = document.getElementById("task-name");
const taskImage = document.getElementById("image-url");
const taskDate = document.getElementById("task-date");
const taskBtn = document.getElementById("addTask");
const form = document.getElementById("form");
//const streak_display = document.querySelectorAll(".streak_display") as HTMLElement;
const sectionOne = document.querySelector(".section-one");
const icon = document.querySelector(".icon-img");
const sectionTwo = document.querySelector(".section-two");
const iconTwo = document.querySelector(".icon-two");
const headingFour = document.querySelector("h4");
const headingFive = document.querySelector("h5");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const del = document.querySelector(".delete");
//const wrapper = document.querySelector(".modal-wrapper") as HTMLElement;
modal.style.display = "none";
sectionTwo.style.display = "none";
// streakdiv.addEventListener("click", (e) => {
//   e.preventDefault();
//   modal.style.display = "flex";
// });
icon.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("loading");
    sectionOne.style.display = "none";
    sectionTwo.style.display = "block";
});
iconTwo.addEventListener("click", (e) => {
    e.preventDefault();
    sectionTwo.style.display = "none";
    sectionOne.style.display = "block";
});
class allTask {
    constructor() {
        this.taskArr = [];
        this.display();
        //console.log("task");
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
    deleteTask(id) {
        this.taskArr.splice(id, 1);
        this.display();
    }
    modalTask(i) {
        let id_index = i;
        const item = this.taskArr[i];
        console.log(i);
        console.log(item);
        modal.innerHTML = "";
        modal.style.display = "block";
        const section = document.createElement("div");
        const imagestreak = document.createElement("p");
        const namestreak = document.createElement("p");
        const datestreak = document.createElement("p");
        const days = document.createElement("p");
        const close = document.createElement("button");
        const del = document.createElement("button");
        // imagestreak.innerHTML = item.image;
        namestreak.textContent = item.name;
        datestreak.textContent = item.date;
        close.textContent = "close";
        del.textContent = "delete";
        section.appendChild(imagestreak);
        section.appendChild(namestreak);
        section.appendChild(datestreak);
        section.appendChild(days);
        section.appendChild(close);
        section.appendChild(del);
        // days.innerHTML=`${CalculateTime.calculate}`
        modal.append(section);
        // modal.style.display = "block";
        close.addEventListener("click", (e) => {
            modal.style.display = "none";
            return false;
        });
        // del.addEventListener("click", (e) => {
        //   e.preventDefault()
        //   const removeOne = (itemIndex: number) => {
        //     this.deleteTask
        //   };
        //    });
    }
    display() {
        const taskdisplay = document.querySelector(".streak_display");
        console.log(taskdisplay);
        while (taskdisplay === null || taskdisplay === void 0 ? void 0 : taskdisplay.hasChildNodes()) {
            taskdisplay.removeChild(taskdisplay.firstChild);
        }
        this.taskArr.map((item, index) => {
            const streakImg = document.createElement("p");
            streakImg.innerHTML = `${item.date}`;
            const streaktask = document.createElement("p");
            streaktask.textContent = item.name;
            const streakdate = document.createElement("p");
            streakdate.textContent = item.date;
            const streakdiv = document.createElement("div");
            streakdiv.className = "streakdiv";
            streakdiv.appendChild(streakImg);
            streakdiv.appendChild(streaktask);
            streakdiv.appendChild(streakdate);
            streakdiv.addEventListener("click", (e) => {
                e.preventDefault();
                this.modalTask(index);
                console.log(index);
            });
            const parentStreak = document.querySelector(".streak_display");
            parentStreak.appendChild(streakdiv);
        });
    }
}
const tasks = new allTask();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let TaskItem = {
        id: Math.ceil(Math.random() * 100),
        name: taskName.value,
        image: taskImage.value,
        date: taskDate.value,
    };
    if (taskName.value === "" ||
        taskImage.value === "" ||
        taskDate.value === "") {
        alert("please fill all details");
    }
    tasks.AddTask(TaskItem);
    tasks.display();
    form.reset();
});
export {};
// wrapper.innerHTML=
