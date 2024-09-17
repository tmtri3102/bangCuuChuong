let c = "";
for (let i = 1; i < 10; i++) {
	c += "<tr>";
	for (let j = 1; j < 10; j++) {
		c += `<td>${i} x ${j} = ${i * j}</td>`;
	}
	c += "</tr>";
}
document.getElementById("content").innerHTML = c;
