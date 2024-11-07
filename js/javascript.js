let crossWords = {
	0: ["Bring-", "Layers", "--to", "-Life"],
	1: ["", "Bold", "Layout", "--Hero"],
	2: ["Create", "---the", "Focal"],
	3: ["Design", "that", "--Pops"]
};

const container = document.getElementById("wordGrid");

Object.values(crossWords).forEach((group) => {
	const groupDiv = document.createElement("div");
	groupDiv.classList.add("word-group");
	group.forEach((word) => {
		const paddedWord = word.padEnd(6, " ");
		paddedWord.split("").forEach((char) => {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			cell.textContent = char === "-" ? " " : char;
			groupDiv.appendChild(cell);
		});
	});

	container.appendChild(groupDiv);
});
var css = 'table td:hover{ background-color: #00ff00 }';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);