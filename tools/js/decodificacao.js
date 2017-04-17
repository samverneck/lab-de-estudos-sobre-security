const mensagem = prompt('Digite sua mensagem');
const cifra = parseInt(prompt('Digite o valor da cifra'));

const decodifique = ( mensagem, cifra ) => ( el, i ) => 
  String.fromCharCode(mensagem.charCodeAt(i) - cifra)

const mensagemDecodificada = mensagem.split('')
                                    .map( decodifique( mensagem, cifra ) )

alert(mensagemDecodificada);
