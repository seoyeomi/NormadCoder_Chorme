const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JS의 object 나 array를 string으로 바꿈.
}
function deleteToDo() {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //사용자가 클릭한 li.id와 다른 toDo 남겨놓기
  saveToDos();
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 child를 가짐.
  li.appendChild(button);
  toDoList.appendChild(li); // document에 존재하는 toDoList 안에 li를 넣어줌. 
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //입력 받은 값을 지우기 전의 값
  toDoInput.value = "";

  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newToDoObj); //toDos에 text를 저장하는 것이 아니라 object를 저장함.
  paintToDo(newToDoObj); //입력 값을 paintTodo에 넣음
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// function sayHello(item) {
//  console.log("This is the turn of", item);
//} 이 함수는 forEach((item)=>~~))로 작성한 화살표 함수와 동일한 내용을 구성하고 있음.

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // string이 아닌 JS에서 사용 가능한 object로 만들 수 있음.
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} //array의 각 item에 대해 하나의 function을 실행 가능하게 함.


