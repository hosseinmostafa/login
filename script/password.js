// password Sign-in
let pass = document.getElementById("password")
let btn = document.getElementById("btn")
let icon = document.querySelector(".icon")

btn.addEventListener("click", function () {
    if (pass.type === "text") {
        pass.type = "password"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    } else {
        pass.type = "text"
        icon.classList.add("fa-eye")
        icon.classList.remove("fa-eye-slash")

    }
})

// password Sign-up
let pass2 = document.getElementById("password2")
let btn2 = document.getElementById("btn2")
let icon2 = document.querySelector(".icon2")

btn2.addEventListener("click", function () {
    if (pass2.type === "text") {
        pass2.type = "password"
        icon2.classList.remove("fa-eye")
        icon2.classList.add("fa-eye-slash")
    } else {
        pass2.type = "text"
        icon2.classList.add("fa-eye")
        icon2.classList.remove("fa-eye-slash")

    }
})