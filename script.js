let list = document.getElementById('list');
let count = 0;
let inputValue = document.getElementById('main-input');


let addList = (event = "") => {
    const note = document.createElement("div");
    note.classList.add("task");
    note.setAttribute('id', "task" + count);

    // function to add the childnode
    if (inputValue.value != "") {
        note.innerHTML = `
                    <div class="data ${count}">
                        <input type="checkbox" id="task${count}" onclick="strike(${count})">
                        <label class="text" for="task${count}" id="label${count}">${inputValue.value}</label>
                    </div>
                    <div class="icon" onclick="rem(${count})">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    `;
        list.appendChild(note);
        console.log(count + " node added");
        count++;
        inputValue.value = "";
    }
    event.preventDefault();
}

// function to remove the task
let rem = (x) => {
    try {
        console.log(x + " node removed");
        list.removeChild(list.children[x]);
    }
    catch (error) {
        console.log(error);
    }
}

// function to strike the text
let strike = (x) => {
    let a = document.getElementById("task" + x);
    document.getElementById("label" + x).classList.toggle("active-label");
}