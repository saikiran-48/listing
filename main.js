const searchInputEl = document.querySelector(".search-input-el");
const listContainerEl = document.querySelector(".list");

searchInputEl.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    if (evt.target.value !== "") {
      const todoItem = `<div class="list-1">
      <input type="checkbox" name="checkbox" value="Search"/> <span>${evt.target.value}</span> <hr>
    </div>`;
      listContainerEl.insertAdjacentHTML("beforeend", todoItem);
      searchInputEl.value = "";
    } else {
      alert("Please type something");
    }
  }
});
