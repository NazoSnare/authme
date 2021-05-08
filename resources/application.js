const speakeasy = require("@levminer/speakeasy")
const fs = require("fs")
const path = require("path")

const application_main = async () => {
	const { shake256 } = require("js-sha3")

	const hash = shake256("asd", 4102)

	console.log(hash)
}

const application_cancel = () => {
	/* clearInterval(int) */
}

export { application_main, application_cancel }
