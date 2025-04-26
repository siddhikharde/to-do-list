let tasks=[];
const addTask = () =>{
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if(text){
        tasks.push({text: text, completed:false });
        updateTaksList();
    }
   
};
const updateTaksList = ()=>{
    const taskList= document.getElementById('taskList');
    taskList.innerHTML= ""
    tasks.forEach(task =>{
        const listItem = document.createElement("li");
        listItem.innerHtml =`
        <div class= "taskItem">
         <div class="task">
            <input type=cheakbox class="cheakbox"/>
            <p>Finish this project`
    })
}
document.getElementById("new-task").addEventListener('click',function(e){
    e.preventDefault();
    addTask();
})