# RSA algoritmo [criptografia]

No RSA as chaves são geradas desta maneira:

* 1 - Escolha de forma aleatória dois **números primos** grandes **p** e **q**, da ordem de **10^100** no mínimo.

> **Math.pow(10,100);**

> **1.0000000000000002e+100**

* 2 - Compute  **n=pq**

* 3 - Compute a **função totiente** em **n**: **Φ(n)=(p-1)(q-1)**.

* 4 - Escolha um inteiro **e** tal que 1 < **e** < **Φ(n)** de forma que **e** e  **Φ(n)** sejam primos entre si.

* 5 - Compute **d** de forma que **de≡1** **(mod Φ(n))**, ou seja, **d**, seja o inverso multiplicativo de **e** em **(mod Φ(n))**.
      
      - No passo 1 os números podem ser testados probabilisticamente para primalidade
      - No passo 5 é usado o algoritmo de Euclides estendido, e o conceito de inverso multiplicativo que vem da aritmética modular
      Por final temos:

A chave pública: o par **(n,e)**.

A chave privada: a tripla **(p,q,d)**. (De fato, para desencriptar, basta guardar **d** como chave privada, mas os primos **p** e **q** são usados para acelerar os cálculos)
