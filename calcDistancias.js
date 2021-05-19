const posicaoCliente = [20, 32];

const lojas = [
	[40, 88],
	[18, 56],
	[99, 2],
];

const plano = [100, 100];

const resultado = lojas.map((loja) => {
	const [pontoX, pontoY] = loja;

	const clienteX = posicaoCliente[0];
	const clientY = posicaoCliente[1];

	const x2 = Math.pow(pontoX - clienteX, 2);
	const y2 = Math.pow(pontoY - clientY, 2);

	const distancia = Math.sqrt(x2 + y2);

	return {
		pontoX,
		pontoY,
		distancia,
	};
});

const ordernado = resultado.sort((a, b) => a.distancia - b.distancia);
const resultadoLimpo = ordernado.map(({ pontoX, pontoY }) => [pontoX, pontoY]);

console.log(resultado, ordernado, resultadoLimpo);
console.log(resultadoLimpo);
