const changeThemeBtn = document.querySelector("#change-theme");

/* changeThemeBtn.addEventListener("change", function (){
    document.body.classList.toggle("dark");
}); */
/* SO Isso ja faz a Função */

// Toggle dark Mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if(darkMode){
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function (){
    toggleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
});