window.addEventListener("scroll", () => {
    const header = document.querySelector(".topbar");

    if (window.scrollY > 640) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
