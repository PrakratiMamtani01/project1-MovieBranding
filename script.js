window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = 300;

    const progress = Math.min(scrollY / maxScroll, 1);

    document.querySelector(".left-door").style.transform =
        `translateX(-${progress * 100}%)`;

    document.querySelector(".right-door").style.transform =
        `translateX(${progress * 100}%)`;

    if (scrollY > 1) {
        document.getElementById("header-text").style.opacity = 0;
    } else {
        document.getElementById("header-text").style.opacity = 1;
    }

    if (progress > 0.2) {
        document.getElementById("content").style.opacity = 1;
    }
});
