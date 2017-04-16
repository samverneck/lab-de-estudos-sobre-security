var mensagem, mensagemCodificada = '', cifra;

mensagem = prompt('Digite sua mensagem');
cifra = parseInt(prompt('Digite o valor da cifra'));

for (var i = 0, length = mensagem.length; i < length; i++) {
  mensagemCodificada += String.fromCharCode(mensagem.charCodeAt(i) + cifra);
}

alert(mensagemCodificada);
