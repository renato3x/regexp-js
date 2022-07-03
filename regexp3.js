const { text, files } = require('./base')

/**
 * -- Quantificadores --
 *  --> * (opcionais) 0 ou N vezes
 *  --> + (obrigatório) 1 ou N vezes
 *  --> ? (opcionais) 0 ou 1 vez
 *  --> {min, max}
 */

/* const regexp = /(Jo+ão+)/gi

console.log(text.match(regexp)) */
// const regexp = /\.jpe?g/ig
const regexp = /\.(jp(e){0,1})g/i

const result = files.filter(file => regexp.test(file))

console.log(result)
