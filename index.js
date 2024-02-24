let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexEl = document.getElementById("startIndex");
let deleteCountEl = document.getElementById("deleteCount");
let itemToAddEl = document.getElementById("itemToAdd");
let updatedArrayEl = document.getElementById("updatedArray");

let stringifiedArr = JSON.stringify(arr);
updatedArrayEl.textContent = stringifiedArr;

function onSplice() {
  let startIndexVal = startIndexEl.value;
  let deleteCountVal = deleteCountEl.value;
  let itemToAddVal = itemToAddEl.value;

  if (itemToAddEl.value === "") {
    arr.splice(parseInt(startIndexVal), parseInt(deleteCountVal));
  } else {
    arr.splice(parseInt(startIndexVal), parseInt(deleteCountVal), itemToAddVal);
  }

  updatedArrayEl.textContent = JSON.stringify(arr);

  startIndexEl.value = "";
  deleteCountEl.value = "";
  itemToAddEl.value = "";
}
