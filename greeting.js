const form = document.getElementById('loginForm');
const input = form.querySelector('input');
const mainDiv = document.getElementById('main');
const helloH1 = mainDiv.querySelector('#hello');

function paintGreetings(username) {
    helloH1.innerText = `Hello ${username}!`;
    mainDiv.classList.remove('hidden');
}

const savedUsername = localStorage.getItem("username");
console.log(savedUsername)
if (savedUsername === null) {
    form.classList.remove('hidden');
} else {
    paintGreetings(savedUsername);
    form.classList.add('hidden');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = input.value;
    form.classList.add('hidden');
    mainDiv.classList.remove('hidden');
    paintGreetings(username);
    localStorage.setItem("username", username);
});