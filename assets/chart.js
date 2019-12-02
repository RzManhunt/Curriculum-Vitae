'strict mode'


function getValor() {
	const input = document.querySelectorAll(".input_grafico");
	const barra = document.querySelectorAll(".circulo_clip")
	let i;

	for(i = 0; i < input.length; i++) {
		if(input[i].value != null) {
			barra[i].classList.replace(barra[i].classList.item(1), "v-" + input[i].value.slice(0,-1));
		}
	}
};