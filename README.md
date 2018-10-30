# .NET Goiás Excel Custom Functions

Este add-in foi criado a partir do Global Office 365 Developer 
Bootcamp promovido em Goiânia pelo Rodrigo Kono e Kássio Khaleb.
A intenção é empoderar o Excel com fórmulas que trabalhem com
endereços brasileiros consumindo uma API externa.

Este add-in ainda não está na Office Store então é necessários ser
carregado paralelamente ao aplicativo do Execel.

## Funcionalidades

* `=DOTNEGOIAS.CONSULTALOGRADOURO(cep)` retorna o nome da rua através do CEP.

O atributo esperado é um texto CEP sem máscara, por exemplo, *74123456*.

## Como testar

### Requisitos

* [Node.js](https://nodejs.org)

* NPM

* Office build number 10827 ou maior.

* Git, caso deseje clonar o projeto e subir alterações.

### Sideloading

1. Clone ou faça o download deste projeto para sua máquina.

2. Através de seu terminal, acesse a pasta do projeto e execute
`npm install` para instalar todar as dependências.

3. Execute o comando `npm start` e aguarde o Excel ser aberto.

4. Clique em Inserir -> Add-in -> DOTNETGOIAS

5. Use as funções descritas acimas.

## Documentação

Você pode utilizar o [jsdocs](https://github.com/jsdoc3/jsdoc) para gerar
a documentação das funções.

## Como colaborar

Faça um fork deste projeto e envie um pull request com as suas alterações.

O código das funções fica em `src/customfunctions.js` e elas precisam 
ser descritas em `config/customfunctions.js`.