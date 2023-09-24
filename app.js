import {calculateBMI} from './javaScript/bmi_calculator.js'

const menu = document.getElementById("menu")
const closeMenuIcon = document.getElementById("close")
const navbarContent = document.querySelector(".navbar ul")

const calculateBMIbtn = document.querySelector(".calculate")
const weight = document.getElementById("weight")
const height = document.getElementById("height")

function openMenu() {
    navbarContent.classList.add("active")
}

function closeMenu() {
    navbarContent.classList.remove("active")
}

document.addEventListener("DOMContentLoaded", () => {
    menu.onclick = openMenu

    closeMenuIcon.onclick = closeMenu
    window.onresize = closeMenu

    if (calculateBMIbtn) {
        calculateBMIbtn.addEventListener("click", () => {
            calculateBMI(height.value, weight.value)
        })
    }
})