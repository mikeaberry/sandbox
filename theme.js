const theme = document.getElementById("theme");
const pre_theme = document.getElementById("pre");
const wrapper = document.getElementById("wrapper");
const body = document.getElementsByTagName("body")[0];

theme.addEventListener("click", () => {
    pre_theme.classList.toggle("dark");
    wrapper.classList.toggle("dark");
    body.classList.toggle("dark");
});