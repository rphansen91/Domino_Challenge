function ShowResults (success) {
	let root = document.getElementById("root")
	let message = [
		"<h1>",
		(success)?"NICE WORK!":"KEEP AT IT",
		"</h1>"
	].join("")

	if (success) {
		root.innerHTML = message
	} else {
		root.innerHTML += message
	}
}