const speakeasy = require("@levminer/speakeasy")
const fs = require("fs")
const path = require("path")

let int

const application_main = () => {
	const file = JSON.parse(
		fs.readFileSync(path.join("settings.json"), "utf-8", (err) => {
			if (err) {
				return console.error(`Authme - Error reading settings.json - ${err}`)
			} else {
				return console.log("Authme - Succefully readed settings.json ")
			}
		})
	)

	console.log(file.settings)

	console.log("Starting")

	int = setInterval(() => {
		const token = speakeasy.totp({
			secret: "7KSQL2JTUDIS5EF65KLMRQIIGY ",
			encoding: "base32",
		})

		const remaining_time = 30 - Math.floor((new Date().getTime() / 1000.0) % 30)

		document.querySelector("#token").textContent = token
		document.querySelector("#time").textContent = remaining_time
	}, 100)

	let grid = document.querySelector(".grid")
	let div = document.createElement("div")

	div.innerHTML = `
		<h3> Name: ${file.settings.show_2fa_names} </h3>
		`

	grid.appendChild(div)
}

const application_cancel = () => {
	console.log("Interval Cleared")

	clearInterval(int)
}

export { application_main, application_cancel }
