"use strict";

const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("open-btn");
const menuItems = document.querySelectorAll(".side-item");
const currentPage = window.location.pathname.split("/").pop();

if (localStorage.getItem("sidebarOpen") === "true") {
  sidebar.classList.add("open-sidebar");
}

openBtn.addEventListener("click", function () {
  sidebar.classList.toggle("open-sidebar");

  const isOpen = sidebar.classList.contains("open-sidebar");
  localStorage.setItem("sidebarOpen", isOpen);
});

const selectLink = function () {
  menuItems.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
};

menuItems.forEach((item) => item.addEventListener("click", selectLink));

menuItems.forEach((item) => {
  const link = item.querySelector("a");
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    item.classList.add("active");
  }
});
