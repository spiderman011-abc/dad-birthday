const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseText = document.getElementById("surpriseText");

const confettiBtn = document.getElementById("confettiBtn");
const confetti = document.getElementById("confetti");


function celebrate(count = 90) {

  confetti.innerHTML = "";

  const colors = [
    "#1b4332",
    "#2d6a4f",
    "#95d5b2",
    "#d4af37",
    "#fffdf7"
  ];

  for (let i = 0; i < count; i++) {

    const piece = document.createElement("span");

    piece.className = "confetti-piece";

    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDelay =
      Math.random() * 1.2 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    piece.style.width =
      6 + Math.random() * 7 + "px";

    piece.style.height =
      10 + Math.random() * 10 + "px";

    confetti.appendChild(piece);
  }

  setTimeout(() => {
    confetti.innerHTML = "";
  }, 4500);

}


/* FIRST SURPRISE */

surpriseBtn.addEventListener("click", () => {

  surpriseText.textContent =
    "SURPRISEEEE! 🎉 Happy 40th, Ama! Scroll down... there's more. 💚";

  surpriseText.classList.remove("reveal");

  void surpriseText.offsetWidth;

  surpriseText.classList.add("reveal");

  celebrate(110);

});


/* FINAL SURPRISE */

confettiBtn.addEventListener("click", () => {

  celebrate(150);

  confettiBtn.textContent =
    "HAPPY BIRTHDAY, AMA! 🎂💚";

});


/* SMOOTH NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", (event) => {

    const target =
      document.querySelector(link.getAttribute("href"));

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});
