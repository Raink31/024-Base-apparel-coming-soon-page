const textSectionEl = document.querySelector("#text-section-el")
const submitBtn = document.querySelector("#submit")
const emailInput = document.querySelector("#email")

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

submitBtn.addEventListener("click", () => {
    if (validateEmail(emailInput.value)) {
        console.log("Email ok!")
        textSectionEl.classList.remove("error")
    } else {
        textSectionEl.classList.add("error")
    }
})

emailInput.addEventListener("keypress", () => {
    if (event.key === "Enter") {
        if (validateEmail(emailInput.value)) {
            console.log("Email ok!")
            textSectionEl.classList.remove("error")
        } else {
            textSectionEl.classList.add("error")
        }
    }
    
})