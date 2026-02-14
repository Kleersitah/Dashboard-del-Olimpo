let name = ""
let progress = 0

const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const nameInput = document.getElementById("nameInput")
const classSelect = document.getElementById("classSelect")
const saveNameBtn = document.getElementById("saveNameBtn")
const progressBar = document.getElementById("progressBar")
const increaseBtn = document.getElementById("increaseBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const secretBtn = document.getElementById("secretBtn")
const godButtons = document.querySelectorAll(".btn-god")
const lightning = document.getElementById("lightning")
const hiddenImage = document.querySelector(".hidden-image")

saveNameBtn.addEventListener("click", () => {

  name = nameInput.value.trim()
  const selectedClass = classSelect.value

  if (!name || !selectedClass) {
    greeting.innerText = "Llena los campos para ser reconocido por el Olimpo"
    return
  }

  greeting.innerText = `El Olimpo reconoce a ${name}, ${selectedClass}`

})


increaseBtn.addEventListener("click", () => {

  if (progress < 100) {
    progress += 10
  }

  progressBar.style.width = `${progress}%`
  progressBar.innerText = `${progress}%`

  progressBar.classList.remove("bg-success", "bg-warning", "bg-danger")

  if (progress < 40) {
    progressBar.classList.add("bg-danger")
  } else if (progress < 80) {
    progressBar.classList.add("bg-warning")
  } else {
    progressBar.classList.add("bg-success")
  }

  if (progress === 100) {
    secretBtn.classList.remove("d-none")
    secretBtn.classList.add("ready")
  } else {
    secretBtn.classList.add("d-none")
    secretBtn.classList.remove("ready")
  }

})

decreaseBtn.addEventListener("click", () => {

  if (progress > 0) {
    progress -= 10
  }

  progressBar.style.width = `${progress}%`
  progressBar.innerText = `${progress}%`

  progressBar.classList.remove("bg-success", "bg-warning", "bg-danger")

  if (progress < 40) {
    progressBar.classList.add("bg-danger")
  } else if (progress < 80) {
    progressBar.classList.add("bg-warning")
  } else {
    progressBar.classList.add("bg-success")
  }

  if (progress === 100) {
    secretBtn.classList.remove("d-none")
    secretBtn.classList.add("ready")
  } else {
    secretBtn.classList.add("d-none")
    secretBtn.classList.remove("ready")
  }

  if (progress < 100) {

    body.classList.remove("god-zeus")
    body.classList.remove("zeus-storm")

    lightning.classList.remove("active")

    hiddenImage.classList.remove("show")
    hiddenImage.classList.add("hidden-image")

  }

})


godButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const god = btn.dataset.god

    body.classList.remove(
      "god-zeus",
      "god-athena",
      "god-ares",
      "god-poseidon",
      "god-hades"
    )

    body.classList.add(`god-${god}`)

    hiddenImage.classList.remove("show")
    hiddenImage.classList.add("hidden-image")

    if (god === "athena") {
      greeting.innerText = name
        ? `${name}, protegido por Atenea 🦉`
        : "Atenea trae sabiduría 🦉"
    }

    if (god === "ares") {
      greeting.innerText = name
        ? `${name}, bendecido por Ares 🗡`
        : "Ares desata la guerra 🗡"
    }

    if (god === "poseidon") {
      greeting.innerText = name
        ? `${name}, elegido de Poseidón 🌊`
        : "Poseidón agita los mares 🌊"
    }

    if (god === "hades") {
      greeting.innerText = name
        ? `${name}, marcado por Hades 🔥`
        : "Hades reclama las sombras 🔥"
    }

  })

})

secretBtn.addEventListener("click", () => {

  if (progress === 100) {

    body.classList.remove(
      "god-athena",
      "god-ares",
      "god-poseidon",
      "god-hades"
    )

    body.classList.add("god-zeus")
    greeting.innerText = name
      ? `${name}, Elegido del Trueno ⚡`
      : "ZEUS HA DESCENDIDO ⚡"

    body.classList.add("zeus-storm")
    lightning.classList.add("active")

    hiddenImage.classList.remove("hidden-image")
    hiddenImage.classList.add("show")

    setTimeout(() => {
      lightning.classList.remove("active")
      body.classList.remove("zeus-storm")
    }, 600)

  }

})

