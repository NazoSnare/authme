const speakeasy = require("@levminer/speakeasy")

let int

const application_main = () => {
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
}

const application_cancel = () => {
	console.log("Interval Cleared")

	clearInterval(int)
}

export { application_main, application_cancel }
