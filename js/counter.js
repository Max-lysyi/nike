window.addEventListener('DOMContentLoaded',() => {
    const modal = document.querySelector(".header_modal")
    const modal_btn = document.querySelector(".modal_btn")

    modal_btn.addEventListener('click', () => {
        modal_btn.classList.toggle("hamburger_active")
        modal.classList.toggle("modal_active")
    })
})