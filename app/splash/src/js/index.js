const { ipcRenderer } = require("electron")

// ? get version and release date
const res = ipcRenderer.sendSync("ver")
document.querySelector("#ver").textContent = `Authme ${res.authme_version} (${res.release_date})`

// ? platform
if (process.platform !== "win32" && process.platform !== "darwin") {
	document.querySelector(".mask").style.backgroundColor = "rgb(10, 10, 10)"
}
