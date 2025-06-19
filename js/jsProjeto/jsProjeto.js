
function Sair() {
    alert('Sua conexão foi encerrada. Volte Sempre!');
}

function redeSocial(nome) {
    alert('Você clicou na rede social ' + nome + '. O mercado não existe. É só demonstração de uso de função Javascript');
}

function meioPagamento() {
    alert('Nosso mercado aceita vários tipos de pagamento: ' + '\n\n' + '- Cartões de crédito: Visa, Mastercard, Elo e America Express' + '\n' + '- Cartões de Débito: todos os bancos' + '\n' + '- Vale Alimentação: Ticket Restaurante, Alelo e VR' + '\n' +'- Pix');
}

function ofertas() {
    alert('Cubrimos qualquer oferta. Contudo, é necessário provar o preço do concorrente. Para provar, você pode: ' + '\n\n' + '- Mostrar folder com a propaganda com o preço' + '\n' + '- Mostrar página web do concorrente que mostra o preço' + '\n' + '- Trazer NF anterior, recente, que mostre o preço pago');
}

function manobrista() {
    alert('Você não precisa se preocupar em achar vaga. Fazemos isso por você, sem custo. Chegue e deixe seu carro com um de nossos manobristas.');
}

function lavagem() {
    alert('Enquanto faz as suas compras sem pressa, há a possibilidade de lavar seu carro e deixá-lo com brilho total. Por apenas R$ 79,00, deixamos seu carro lavado, aspirado e enceirado.')
}

function entrega() {
    alert('Caso não tenha como levar suas compras, podemos entregá-la em sua casa, mediante agendamento. Converse com um atendente.')
}

function comprar(item, selecao, unidade) {
  	var selecionado = document.getElementById(selecao);
	var valor = selecionado.options[selecionado.selectedIndex].value;
    alert ('você adicionou ' + valor + ' ' + unidade + ' de ' + item +  ' ao carrinho');
}

function finalizarCompra() {
    alert('Cadastro Efetuado com sucesso!');

}