function addChangeStorageListener(callback) {
    browser.storage.onChanged.addListener(callback);
}

const savedTheme = localStorage.getItem('theme');
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userSelectedTheme = savedTheme ? (savedTheme === 'true') : prefersDarkMode;

if (userSelectedTheme) {
    document.body.classList.add('dark-theme');
} else {
    document.body.classList.add('light-theme');
}

var loadingScreen = document.getElementsByClassName("loading")[0];
loadingScreen.style.display = "block";

var composeApp = "composeApp.js";

function loadScriptInBody(src) {
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);

}

var script = document.createElement('script');
// Устанавливаем атрибут src для указания пути к скрипту
script.src = 'skiko.js';
document.head.appendChild(script);
script.onload = function() {
    loadScriptInBody(composeApp);
}


window.onload = function() {
    loadingScreen.remove();

};