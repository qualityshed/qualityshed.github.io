// Dark mode stolen from Kevin Powell
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".darkModeToggler");

if(darkMode === "true"){
    document.body.classList.add("darkMode");
    darkModeToggle.src = "assets/dark.png";
}else{
    darkModeToggle.src = "assets/light.png";
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "true"){
        document.body.classList.add("darkMode");
        localStorage.setItem("darkMode", "true");
        darkModeToggle.src = "assets/dark.png";
    }else{
        document.body.classList.remove("darkMode");
        localStorage.setItem("darkMode", "false");
        darkModeToggle.src = "assets/light.png";
    }
})

// Contact form from some shitty website cuz I'm a lazy skid