const mensagem = prompt('Digite sua mensagem');
const cifra = parseInt(prompt('Digite o valor da cifra'));

const codifique = ( mensagem, cifra ) => ( el, i ) => 
  String.fromCharCode(mensagem.charCodeAt(i) + cifra)

const mensagemCodificada = mensagem.split('')
                                    .map( codifique( mensagem, cifra ) )

alert(mensagemCodificada);
