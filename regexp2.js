const { text } = require('./base')

const regExp = /João|Maria/ig

console.log(text)
console.log(text.match(regExp))
// console.log(text.replace(/(João|Maria)/ig, '<p>$1</p>'))
console.log(text.replace(/(João|Maria)/ig, input => input.toUpperCase()))

/**
 * -> Os grupos no regexp são representados por $numeroDoGrupo
 *    Ex: /(grupo1)|(grupo2)/
 *    
 *    No grupo 1, onde está escrito grupo1 é representado por $1
 *    No grupo 2, onde está escrito grupo2 é representado por $2
 * 
 */