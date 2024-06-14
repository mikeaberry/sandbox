const seeMore = document.getElementById("seeMoreBtn");
const pre = document.getElementById("pre");

seeMore.addEventListener("click", () => {
    pre.classList.toggle("expanded");

    const expanded = pre.classList.contains("expanded");
    if (expanded) {
        seeMore.innerHTML = "Collapse code";
    } else {
        seeMore.innerHTML = "Expand code";
    }
});
