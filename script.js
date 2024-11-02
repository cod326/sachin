firstBtn = document.querySelector(".first-btn");
bg = document.querySelector(".bg");
onclickBtn = document.querySelector(".onclick-btn");

firstBtn.onclick = () =>{
    onclickBtn.style.display = "block";
}

bg.onclick = () =>{
    onclickBtn.style.display = "none";
}