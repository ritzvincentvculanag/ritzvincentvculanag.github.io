const navMainTrigger = document.querySelector("#nav-main-trigger");
const navMainReturn = document.querySelector("#nav-main-return");
const navMain = document.querySelector("#nav-main");

let isToggled = false;

navMainTrigger.addEventListener("click", triggerNavBar);
navMainReturn.addEventListener("click", triggerNavBar);

window.addEventListener("resize", resetNavBar);

function triggerNavBar() {
  if (window.innerWidth <= 375 && isToggled) {
    isToggled = true;
    navMain.style.right = "-400px";
    return;
  }

  const rightValue = isToggled ? "-400px" : "0px";
  navMain.style.right = rightValue;
  isToggled = !isToggled;
}

function resetNavBar() {
  isToggled = false;
  const rightValue = window.innerWidth >= 720 ? "0px" : "-400px";
  navMain.style.right = rightValue;
}
