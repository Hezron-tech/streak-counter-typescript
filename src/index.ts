import {Task} from "./interfaces/taskInterface.js"
const taskName = document.getElementById("task-name") as HTMLInputElement;
const taskImage = document.getElementById("image-url") as HTMLInputElement;
const taskDate = document.getElementById("task-date") as HTMLInputElement;
const taskBtn = document.getElementById("addTask") as HTMLButtonElement;
const form = document.getElementById("form") as HTMLFormElement;
const streak_display= document.querySelector(".streak_display") as HTMLUListElement;






class allTask{
    private taskArr: Task[]=[];

    constructor(){
        //console.log("task");
        
    }

    AddTask(TaskItem:Task){
        this.taskArr.push(TaskItem)

    }

    GetTaskById(id:number){
    return this.taskArr.find((streak) => streak.id===id )
    }

    GetAllTask(){
        return this.taskArr
    }

    displayArr(){
        return this.taskArr
    }
}

const tasks = new allTask();
form.addEventListener('submit',(e)=>{
e.preventDefault();
let TaskItem:Task = {
    id:Math.ceil(Math.random()*100),
    name:taskName.value,
    image:taskImage.value,
    date:taskDate.value,

    

}
tasks.AddTask(TaskItem)
form.reset()
streak_display.innerHTML=displayStreak(tasks.displayArr());
})
const displayStreak= (data:Task[]):string =>{
    return data.map((tasks)=>
        ` <div class="streaks">
              <div class="streaks-image">${tasks.image}<div/>
              <div class="streaks-date">${tasks.name}<div/>
             <div class="streaks-name">${tasks.date}<div/>
        
           </div>`
    

    ).join("")
}



