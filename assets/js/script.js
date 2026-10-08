const menu = document.querySelector(".menu-toggle");
menu.addEventListener("click", () => {
  const nav = document.querySelector(".site-nav");
  const open = nav.classList.toggle("is-open");
  menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
document
  .querySelectorAll(".site-nav a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector(".site-nav").classList.remove("is-open"),
    ),
  );
