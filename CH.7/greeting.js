const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("HIDDEN_CLASSNAME");
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form이 hidden이라는 class를 가지고 시작하기 때문에, 만약 유저정보가 저장되어있지 않은(null)상태라면 이 hidden을 지워서 form의 형태가 보이게끔 한다.
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  paintGreetings(savedUsername);
}