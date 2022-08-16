import { Task } from "./interfaces/taskInterface.js";
import { CalculateTime } from "./classes/calculate.js";

const taskName = document.getElementById("task-name") as HTMLInputElement;
const taskImage = document.getElementById("image-url") as HTMLInputElement;
const taskDate = document.getElementById("task-date") as HTMLInputElement;
const taskBtn = document.getElementById("addTask") as HTMLButtonElement;
const form = document.getElementById("form") as HTMLFormElement;
//const streak_display = document.querySelectorAll(".streak_display") as HTMLElement;
const sectionOne = document.querySelector(".section-one") as HTMLDivElement;
const icon = document.querySelector(".icon-img") as HTMLButtonElement;
const sectionTwo = document.querySelector(".section-two") as HTMLDivElement;
const iconTwo = document.querySelector(".icon-two") as HTMLButtonElement;
const headingFour = document.querySelector("h4") as HTMLHeadingElement;
const headingFive = document.querySelector("h5") as HTMLHeadingElement;
const modal = document.querySelector(".modal") as HTMLDivElement;
const close = document.querySelector(".close") as HTMLButtonElement;
const del = document.querySelector(".delete") as HTMLButtonElement;

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
  public taskArr: Task[] = [];

  constructor() {
    this.display();
    //console.log("task");
  }

  AddTask(TaskItem: Task) {
    this.taskArr.push(TaskItem);
  }

  GetTaskById(id: number) {
    return this.taskArr.find((streak) => streak.id === id);
  }

  GetAllTask() {
    return this.taskArr;
  }

  displayArr() {
    return this.taskArr;
  }

  deleteTask(id: number) {
    this.taskArr.splice(id, 1);
    this.display();
  }

  modalTask(i: number) {
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

    while (taskdisplay?.hasChildNodes()) {
      taskdisplay.removeChild(taskdisplay.firstChild);
    }
    this.taskArr.map((item, index: number) => {
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

  let TaskItem: Task = {
    id: Math.ceil(Math.random() * 100),
    name: taskName.value,
    image: taskImage.value,
    date: taskDate.value,
  };
  if (
    taskName.value === "" ||
    taskImage.value === "" ||
    taskDate.value === ""
  ) {
    alert("please fill all details");
  }

  tasks.AddTask(TaskItem);

  tasks.display();
  form.reset();
});

// wrapper.innerHTML=
