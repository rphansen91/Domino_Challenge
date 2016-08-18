function ShowResults (success) {
	let root = document.getElementById("root")

	let text = (success === true)?"NICE WORK!":"KEEP AT IT"
	if (typeof success == "string") { text = success }
	let message = ["<h1>","<span class='light'>",text,"</span>","</h1>"].join("")

	root.className = (success === true)?"falling":"";
	root.innerHTML += message;
}