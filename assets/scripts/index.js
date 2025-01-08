const navMain = document.querySelector(".nav-main__links");
const navMainTrigger = document.querySelector(".nav-main__trigger");
const navMainReturn = document.querySelector(".nav-main__links__return");

let isToggled = false;

navMainTrigger.addEventListener("click", triggerNavBar);
navMainReturn.addEventListener("click", triggerNavBar);

window.addEventListener("resize", resetNavBar);

function triggerNavBar() {
  const rightValue = isToggled ? "-400px" : "0px";
  navMain.style.right = rightValue;
  isToggled = !isToggled;
}

function resetNavBar() {
  isToggled = false;
  const rightValue = window.innerWidth >= 720 ? "0px" : "-400px";
  navMain.style.right = rightValue;
}
