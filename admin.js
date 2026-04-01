const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
    alert("Please log in first");
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("rememberedUser");
    sessionStorage.setItem("loggedOut", "true");
    window.location.href = "login.html";
}

let students = JSON.parse(localStorage.getItem("students") || "[]");

let canvas = document.getElementById("chart");
let ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 200;

function draw() {
    ctx.clearRect(0, 0, 300, 200);
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 100, 50, students.length * 5);
    requestAnimationFrame(draw);
}

draw();