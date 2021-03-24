const speakeasy = require("@levminer/speakeasy")

const main = () => {
	let asd = 2
	let asdka = 3
	console.log(speakeasy.generateSecret())

	let secret = asd ** asdka

	document.querySelector("#h1").textContent = "asd"
}

export default main
