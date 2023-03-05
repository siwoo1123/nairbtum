const day = document.getElementById('date');
const time = document.getElementById('clock');

const func = ()=>{
    const now = new Date();
    day.innerText = `${now.getFullYear()}.${now.getMonth()+1}.${now.getDate()}`;
    time.innerText = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
}

func();
setInterval(func, 500);