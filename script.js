const users = {
  emerald: "Cakka",
  ruby: "Neysa",
  mahogany: "Rizki",
};

function login() {
  const code = document.getElementById("code").value.toLowerCase();

  if (users[code]) {
    localStorage.setItem("selectedUser", code);

    window.location.href = "card.html";
  } else {
    alert("clicked");
  }
}
const snowContainer = document.getElementById("snow-container");

function createSnow() {
  const snow = document.createElement("div");

  snow.classList.add("snow");

  snow.style.left = Math.random() * window.innerWidth + "px";

  snow.style.animationDuration = Math.random() * 4 + 3 + "s";

  snow.style.opacity = Math.random();

  snow.style.width = snow.style.height = Math.random() * 6 + 2 + "px";

  snowContainer.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 7000);
}

setInterval(createSnow, 100);
