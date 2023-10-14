const openModal1 = document.querySelector(".project-1")
const modal1 = document.querySelector(".modal1")
const modal1Close = document.querySelectorAll(".modal1-close")

openModal1.addEventListener("click", () => {
    console.log("hello smello bjj")
    modal1.showModal();
})

modal1Close.forEach((m) => {
    m.addEventListener('click', () => {
        modal1.close();
    })
})