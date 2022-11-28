var readlineSync = require('readline-sync')
var nome = readlineSync.question('Qual é seu nome? ')
console.log(`Olá! Seja bem-vindo ${nome}!`)