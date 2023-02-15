const addButton = document.getElementById("addbutton");
const inputField = document.getElementById("addinput");
let trashButtons = document.getElementsByClassName("del");
const firstTask = document.getElementById("firstask");
let firstTime = true


addButton.addEventListener("click", function() {
    if(firstTime){
        firstTask.classList.add("crossText");
        firstTime = false;
    }

    const taskContainer = document.getElementById("taskcont");
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const taskText = document.createElement("p");
    taskText.innerText = inputField.value;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("chec");
    checkbox.addEventListener('change', function() {
        if(checkbox.checked)
            taskText.classList.add("crossText");
        else
            taskText.classList.remove("crossText");
    });


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("del");

    const trashImage = document.createElement("img");
    trashImage.setAttribute("src", "https://png.pngtree.com/png-clipart/20191122/original/pngtree-trash-icon-for-your-project-png-image_5164948.jpg");
    trashImage.classList.add("trashimg");

    deleteButton.addEventListener("click", function() {
        newTask.remove();
    });


    deleteButton.appendChild(trashImage);
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    taskContainer.appendChild(newTask);

    inputField.value = "";
});


for (let i = 0; i < trashButtons.length; i++)
    trashButtons[i].addEventListener("click", function() {
        let parent = this.parentElement;
        parent.remove();
    });
