gsap.from("h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
});

gsap.from(".buttons", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",
});

gsap.from(".subtext", {
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 1,
    ease: "power3.out",
});

const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

document.getElementById("loader").addEventListener("click", () => {
    alert("Loader functionality coming soon!");
});

document.getElementById("nothing").addEventListener("click", () => {
    alert("Stay tuned for updates!");
});
