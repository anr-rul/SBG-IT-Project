const navLinks = document.querySelectorAll(".nav-scroll");
const navPrimary = document.querySelector(".nav-primary");
const navRes = document.querySelector(".nav-reset");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (navRes) {
      navRes.addEventListener("click", function () {
        navLinks.forEach((link) => {
          if (link.classList.contains("active-nav")) {
            link.classList.remove("active-nav");
            console.log(
              `Class '${"active-nav"}' dihapus dari link: ${link.textContent}`
            );
          }
        });
        console.log("Navigasi berhasil di-reset.");
      });
    }
    if (navLinks[i].classList.contains("active-nav")) {
      navLinks[i].classList.remove("active-nav");
    } else {
      for (let k = 0; k < navLinks.length; k++) {
        navLinks[k].classList.remove("active-nav");
      }
      navLinks[i].classList.add("active-nav");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;

      accordionHeaders.forEach((otherHeader) => {
        const otherContent = otherHeader.nextElementSibling;

        if (otherHeader.classList.contains("active")) {
          if (otherHeader !== this) {
            otherHeader.classList.remove("active");
            otherContent.classList.remove("active");
          }
        }
      });
      this.classList.toggle("active");
      content.classList.toggle("active");
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mainMenu = document.getElementById("main-menu");
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("hidden-mobile");
  });
});
