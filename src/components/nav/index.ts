const nav = document.querySelector(".nav-main") as Element;
const navBtn = document.querySelector(".nav-main-toggler button") as Element;
let screenSize = { width: 0 };

function handleNavBtnClick() {
  const ariaHidden = nav.getAttribute("aria-hidden");
  const isHidden = ariaHidden === "false" ? false : true;

  nav.setAttribute("aria-hidden", String(!isHidden));
}

function handleMobile() {
  screenSize.width = window.innerWidth;

  if (screenSize.width < 768) {
    nav.setAttribute("aria-hidden", "true");
  } else {
    nav.setAttribute("aria-hidden", "false");
  }
}

navBtn.addEventListener("click", handleNavBtnClick);

window.addEventListener("resize", handleMobile);

handleMobile();

export {};
