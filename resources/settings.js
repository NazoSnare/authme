const fs = require("fs")
const path = require("path")

const settings_main = () => {
	const save_settings = () => {
		fs.writeFileSync(path.join("settings.json"), JSON.stringify(file))
	}

	const file = JSON.parse(
		fs.readFileSync(path.join("settings.json"), "utf-8", (err) => {
			if (err) {
				return console.error(`Authme - Error reading settings.json - ${err}`)
			} else {
				return console.log("Authme - Succefully readed settings.json ")
			}
		})
	)

	const name_button = document.querySelector("#button0")

	name_button.addEventListener("click", () => {
		if (file.settings.show_2fa_names === false) {
			name_button.textContent = "On"

			file.settings.show_2fa_names = true

			save_settings()
		} else {
			name_button.textContent = "Off"

			file.settings.show_2fa_names = false

			save_settings()
		}
	})
}

export { settings_main }
