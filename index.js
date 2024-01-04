const body = document.body;
const themeBtn = document.querySelector(".theme-btn");
body.dataset.theme = JSON.parse(localStorage.getItem("theme")) || "light";

function toggleTheme(){
    if(body.getAttribute("data-theme") === "dark"){
      themeBtn.innerText = "Dark Theme";
      body.setAttribute("data-theme", "light");
      localStorage.setItem("theme", JSON.stringify(body.dataset.theme));
    }
    else {
        themeBtn.innerText = "Light Theme";
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", JSON.stringify(body.dataset.theme));
    }
}