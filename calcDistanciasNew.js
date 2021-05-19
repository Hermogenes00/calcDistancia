//Pseudo posições do cliente
const posicaoCliente = [20, 32];

//Pseudo posições da loja
const lojas = [
	[40, 88],
	[18, 56],
	[99, 2],
];

/**
 * Obtenho posição x e y da loja bem como resultado da distância da loja para com o cliente
 */
const distancias = lojas.map((loja) => {
	const [lojaX, lojaY] = loja;

	const clienteX = posicaoCliente[0];
	const clienteY = posicaoCliente[1];

	const resultX = Math.pow(lojaX - clienteX, 2);
	const resultY = Math.pow(lojaY - clienteY, 2);

	const distancia = Math.sqrt(resultX + resultY);
	return {
		x: lojaX,
		y: lojaY,
		distancia,
	};
});

/**
 * Ordenando as distânciaas baseando-se no resultado da fórmula
 */
const maisProximos = distancias.sort((a, b) => a.distancia - b.distancia);

/**
 * Obtenho posição x e y da loja somente a
 * partir do array retornado pela constante "maisProximos"
 */
const posicaoXY = maisProximos.map((dist) => {
	return [dist.x, dist.y];
});

console.log(clearResult);
