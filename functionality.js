//Pull objects in to manipulate
const addItem = document.getElementById("add-item");
const shoppingList = document.getElementById("shopping-list");
const newItem = document.getElementById("new-item");

function addingItems() {
    let ItemValue = newItem.value;
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    let confirmButton = document.createElement('button');

    li.textContent = ItemValue;
    shoppingList.appendChild(li);
    
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    li.appendChild(deleteButton);
    newItem.value = "";
    
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        li.appendChild(editButton);

    editButton.addEventListener("click",() =>{
        li.innerHTML = `<input value="${ItemValue}" id="updated-value"></input>`
        confirmButton.textContent = "Confirm"
        confirmButton.classList.add("confirm-button");
        li.appendChild(confirmButton);
    })

    confirmButton.addEventListener("click",() => {
        console.log("confirm Changes");
        let updatedValue = document.getElementById("updated-value").value;
        li.textContent = updatedValue;
        li.appendChild(deleteButton);
        li.appendChild(editButton);
    })

    deleteButton.addEventListener("click", () => {
        console.log("item removed!")
        li.remove();
    });
};

addItem.addEventListener("click", () => {
    console.log('item added!')
    addingItems();
});