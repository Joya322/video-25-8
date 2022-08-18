/* const items = document.getElementsByClassName("item");
for (const item of items) {
    item.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target);
        //jak select kora hoyecha tar parent er childk remove korte hobe. remove hobe select kora child e
  });
}


document.getElementById("add-button").addEventListener("click", function () {
    const listContainer = document.getElementById("list-container");

    const li = document.createElement("li");
    li.innerText = "Brand new Item added";
    li.classList.add("item");
    listContainer.appendChild(li);
}) */


//uprer sytem a new item ul a add hole seta delte hobe na tai delegate korte hobe. niche ta dekhano holo

const items = document.getElementById("list-container");
  items.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
    //jak select kora hoyecha tar parent er childk remove korte hobe. remove hobe select kora child e
  });


document.getElementById("add-button").addEventListener("click", function () {
  const listContainer = document.getElementById("list-container");

  const li = document.createElement("li");
  li.innerText = "Brand new Item added";

  listContainer.appendChild(li);
});