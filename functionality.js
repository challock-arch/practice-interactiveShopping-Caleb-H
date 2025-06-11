//Pull objects in to manipulate
const addItem = document.getElementById("add-item");
const newItem = document.getElementById("new-item");
const shoppingList = document.getElementById("shopping-list");

function addingItems(newItem) {
    shoppingList.innerHTML += `<li id="item 1">${newItem}</li>`
    
}

addItem.addEventListener("click", () => {
    const li = createElement("li");
    let newItemValue = newItem.text
    // const listItem = document.createElement("li");
    console.log(newItemValue);
    addingItems(newItemValue);
    // shoppingList.listItem.appendChild(newItem);
    
})