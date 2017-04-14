# Como quebrar uma hash ou uma criptografia?

Um assunto muito abordado na Computação, em especial na Segurança Computacional, fundamental para qualquer tipo de proteção a sistemas. 
E hoje, abordarei um pouco mais aqui, nessa publicação. 

Bom, segundo a definição da internet:

  **criptografia** 
  **substantivo** 
  **feminino**
   
* 1. conjunto de princípios e técnicas empregadas para cifrar a escrita, 
torná-la ininteligível para os que não tenham acesso às convenções combinadas; criptologia. 

* 2. em operações políticas, diplomáticas, militares, criminais etc. 
modificação codificada de um texto, de forma a impedir sua compreensão pelos que não conhecem seus caracteres ou convenções.

As técnicas mais conhecidas de computação na sua compreensão de criptografia envolvem "chaves/keys". E nada mais é do que um grupo de bits baseado em um determinado algoritmo que codifica/decodifica dados e informações. 
Se o destinatário da informação/dado utilizar uma chave incompatível com a chave do remetente, ele não conseguirá acesso a informação/dado.

![HASH](https://www.gta.ufrj.br/grad/07_1/ass-dig/NotesImages/Topic6NotesImage2.jpg)

(UFRJ)
Nos príncipios da Criptografia, havia o uso apenas de um algoritmo específico que codificava a mensagem. Por tanto, o remetente necessitava apenas do conhecimento desse algoritmo para poder extrair a mensagem. O ponto negativo principal era se alguém não envolvido na comunicação tivesse posse desse algoritmo, ele também poderia decifrar a mensagem. Havia também outro problema, imagine uma pessoa X enviando um dado criptografado à pessoa Y. Esta última teria que ter o conhecimento do algoritmo usado. Agora, imagine uma pessoa N

que também precisasse receber esse dado da pessoa X, mas, a pessoa N não poderia saber qual é o dado a ser enviado à pessoa Y. Se a pessoa N tivesse acesso a informação enviada à pessoa Y, isso seria um problema. Por tanto, a solução é utilizar um diferente código/algoritmo para cada destinatário. Com o uso de chaves, um emissor pode usar o mesmo algoritmo (o mesmo método) para vários receptores. Basta que cada um receba uma chave diferente. Além disso, caso um receptor perca ou exponha determinada chave, é possível trocá-la, mantendo-se o mesmo algoritmo.

Você já deve ter ouvido falar de chave de 64 bits, chave de 128 bits e assim por diante. Esses valores expressam o tamanho de uma determinada chave. Quanto mais bits forem utilizados, mais segura será a criptografia. Explica-se: caso um algoritmo use chaves de 8 bits, por exemplo, apenas 256 chaves poderão ser usadas na decodificação, pois 2 elevado a 8 é 256. Isso deixa claro que 8 bits é inseguro, pois até uma pessoa é capaz de gerar as 256 combinações (embora demore), imagine então um computador! Porém, se forem usados 128 ou mais bits para chaves (faça 2 elevado a 128 para ver o que acontece), teremos uma

quantidade extremamente grande de combinações, deixando a informação criptografada bem mais segura.

Com a utilização de keys (chaves), um remetente pode usar o mesmo método, ou algoritmo, para vários destinatários. Apenas cada um recebendo uma key diferente. Uma outra consideração relevante é a de bits. Na internet vemos muitas chaves de 64 bits, 128 e etc. Esses valores condizem com o tamanho de uma chave. Ou seja, mais segura é uma criptografia se o tamanho da chave for longo. Na prática, vou exemplificar, se um algoritmo use chaves de 8 bits, somente 256 chaves poderão ser usadas na decodificação, afinal, matematicamente dizendo, 2 elevado a 8 é 256. Isso prova que 8 bits é inseguro, uma pessoa normal pode ser capaz de gerar as 256 combinações, mesmo que leve um bom tempo. Imagine uma super-máquina, programada para decodificar dados/quebrar criptografia...

Entretanto, se for usado 128 bits para chaves ou mais, você teria matematicamente 2 elevado a 128, ou seja, uma quantia de combinações muito grande, tornando mais segura a informação/dado criptografada.

Não entrarei muito a fundo dos tipos de criptografia e etc, quando eu mencioná-los, basta que você pesquise e terá mais informações. Vamos passar ao que interessa.

## Como quebrar uma hash?

Calma, o que é uma hash?

Segundo o Wikipedia, um hash (ou escrutínio) é uma sequência de bits geradas por um algoritmo de dispersão, em geral representada em base hexadecimal, que permite a visualização em letras e números (0 a 9 e A a F), representando um nibble cada. O conceito teórico diz que "hash é a transformação de uma grande quantidade de dados em uma

pequena quantidade de informações". Essa sequência busca identificar um arquivo ou informação unicamente. Por exemplo, uma mensagem de correio eletrônico, uma senha, uma chave criptográfica ou mesmo um arquivo. É um método para transformar dados de tal forma que o resultado seja (quase) exclusivo. Além disso, funções usadas em criptografia garantem que não é possível a partir de um valor de hash retornar à informação original.

Como a sequência do hash é limitada, muitas vezes não passando de 512 bits, existem colisões (sequências iguais para dados diferentes). Quanto maior for a dificuldade de se criar colisões intencionais, melhor é o algoritmo.

Uma função de hash recebe um valor de um determinado tipo e retorna um código para ele. Enquanto o ideal seria gerar identificadores únicos para os valores de entrada, isso normalmente não é possível: na maioria dos casos, o contra-domínio de nossa função é muito menor do que o seu domínio, ou seja, x (o tipo de entrada) pode assumir uma gama muito maior de valores do que HASH(X) (o resultado da função de hash).

Os algoritmos de hash mais usados são os de 16 bytes (ou 128 bits, tamanho do message digest) MD4 e MD5 ou o SHA-1, de 20 bytes (160 bits).

**Características de alguns algoritmos:**

* MD4: Desenvolvido em 1990/91 por Ron Rivest, vários ataques foram detectados, o que fez com que o algoritmo fosse considerado frágil. Descrito na RFC 1320.

* MD5: O MD5 (Message-Digest algorithm 5) é um algoritmo de hash de 128 bits unidirecional desenvolvido pela RSA Data Security, Inc., descrito na RFC 1321, e muito utilizado por softwares com protocolo par-a-par (P2P, ou Peer-to-Peer, em inglês), verificação de integridade e logins. Existem alguns métodos de ataque divulgados para o MD5.

* SHA-1 (Secure Hash Algorithm): Desenvolvido pelo NIST e NSA. Já foram exploradas falhas no SHA.

* WHIRLPOOL: função criptográfica de hash desenvolvida por Paulo S. L. M. Barreto e por Vincent Rijmen (co-autor do AES). A função foi recomendada pelo projeto NESSIE (Europeu). Foi também adotado pelo ISO e IEC como parte do padrão internacional ISO 10118-3.

O processo é unidirecional e impossibilita descobrir o conteúdo original a partir do Hash. O valor de conferência ("Soma de verificação") muda se um único bit for alterado, acrescentado ou retirado da mensagem.


