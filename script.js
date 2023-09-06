
const wrapper2 = document.querySelector(".wrapper2");
const wrapper = document.querySelector(".wrapper");
const container = document.querySelector(".container");

window.addEventListener("load",()=>{

    wrapper2.classList.add("active");
    wrapper.classList.remove("active");
    container.classList.remove("active");

    setTimeout(()=>{
    wrapper2.classList.remove("active");
    wrapper.classList.add("active");
    container.classList.add("active");
    },5000)


})