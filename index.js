let tasks = [
    {
        id: 0,
        name: "Do Homework",
        completed: false,
    },
    {
        id: 1,
        name: "Call Sammy to fix the sink",
        completed: false,
    },
]

function generateIDForTasks(){
    let numGen = true;
    let idNum;
    while(numGen){
        idNum = Math.floor(Math.random()* 1000);
        numGen = false;

        tasks.forEach(task => {
            if(task.id == idNum){
                numGen = true;
            }
        });
    }
    return idNum;
}

document.querySelector('card-container').setAttribute("tasks", JSON.stringify(tasks));

function addTask(taskname){
    if(taskname != ''){
        let id = generateIDForTasks();
        tasks.push({
            id: id,
            name: taskname,
            completed: false,
        });
        document.querySelector('card-container').setAttribute("tasks", JSON.stringify(tasks));
    }
    
}

function deleteTask(taskid){
    tasks = tasks.filter((task)=>{
        if(task.id != taskid){
            return task;
        }
    });
    document.querySelector('card-container').setAttribute("tasks", JSON.stringify(tasks));
}

function completeTask(taskid){
    tasks = tasks.map(task=>{
        if(task.id == taskid){
            task.completed = true;
        }
        return task;
    });
    document.querySelector('card-container').setAttribute("tasks", JSON.stringify(tasks));
}