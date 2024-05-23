document.querySelector(".header__logo-title").textContent = "< Maksut.Dev />";

const menu_button = document.querySelector(".header__menu-button");
const nav_menu = document.querySelector(".header__nav-menu");
menu_button.addEventListener("click", (event) => {
  event.stopPropagation();
  nav_menu.classList.toggle("header__menu-active");
  menu_button.classList.toggle("header__menu-buttonActive");
});

// const lang_btn = document.querySelector(".header__lang-button");

// lang_btn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     lang_btn.classList.toggle("header__lang-buttonActive");
// });

document.body.addEventListener("click", () => {
  nav_menu.classList.remove("header__menu-active");
  menu_button.classList.remove("header__menu-buttonActive");
  lang_btn.classList.remove("header__lang-buttonActive");
});

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_xrmad5f";
    const templateID = "template_e8vlpjt";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = "Send";
            alert("Sent!");
            document.getElementById("form").reset();
        },
        (err) => {
            btn.value = "Send";
            alert(JSON.stringify(err));
        }
    );
});