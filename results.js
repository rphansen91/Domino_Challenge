function ShowResults (success) {
	let root = document.getElementById("root")

	let text = (success === true)?"NICE WORK!":"KEEP AT IT"
	if (typeof success == "string") { text = success }
	let message = ["<h1>",text,"</h1>"].join("")

	if (success === true) {
		root.innerHTML = message
	} else {
		root.innerHTML += message
	}
}