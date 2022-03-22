let sum = 0
for (let i = 0; i < document.styleSheets.length; i++) {
	for (let j = 0; j < document.styleSheets[i].cssRules.length; j++) {
		let div = document.createElement('div')
		div.style.height = '100px'
		div.style.display = 'flex'
		div.style.alignItems = 'center'
		let color = document.styleSheets[i].cssRules[j].style.backgroundColor
		div.style.backgroundColor = color
		let p = document.createElement('p')
		p.className = j
		let cssText = document.styleSheets[i].cssRules[j].style.cssText
		p.innerHTML = cssText
		p.style.display = 'none'
		div.style.textAlign = 'center'
		p.style.color = document.styleSheets[i].cssRules[j].style.color
		div.onclick = () => {
			if (p.style.display === 'none') {
				p.style.display = 'inline'
			} else {
				p.style.display = 'none'
			}
		}
		div.append(p)
		document.body.append(div)
		sum++
	}
}
summary = document.createElement('h1')
summary.style.color = 'black'
summary.innerText = 'Общее количество плиток: ' + sum
document.body.append(summary)
