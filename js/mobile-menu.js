
(() => {
const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
    // const modalForm = document.querySelector("[data-modal]");
    // const modalClose = document.querySelector("[data-close-button]");
menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("open");
    mobileMenuRef.classList.toggle("open");
    
});
    
    
})();