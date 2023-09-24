const bmi = document.querySelector(".bmi")
const weightCondition = document.querySelector(".weight-condition")
let condition

export function calculateBMI(height, weight) {
    if (height === "" || weight === "") {
        alert("❌ Error: You must enter both height and weight!")
    } else {
        weightCondition.style.color = ""
        
        const calculationBMI = weight / (height * height)
        const totalBMI = parseFloat(calculationBMI.toFixed(2))
        bmi.textContent = totalBMI

        if (totalBMI <= 18.4) {
            condition = "Underweight"
            weightCondition.style.color = "yellow"
        } else if (totalBMI > 18.4 && totalBMI < 24.9) {
            condition = "Normal"
            weightCondition.style.color = "green"
        } else if (totalBMI >= 25 && totalBMI < 39.9) {
            condition = "Overweight"
            weightCondition.style.color = "orange"
        } else {
            condition = "Obese"
            weightCondition.style.color = "red"
        }

        weightCondition.textContent = condition
        document.querySelector(".results").classList.add("active")
    }
}