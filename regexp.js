const { text } = require('./base')

const regExp = /(maria|joão|luiz)(, hoje sua esposa)/i
console.log(regExp.test(text))
console.log(regExp.exec(text))

/**
 * -> Uma expressão regular inicia entre as barras /regExp/
 * -> Tudo que tiver entre as barras será considerado uma expressão
 *    regular
 */

/**
 * Flags do RegExp
 * 
 * g - global: encontra todas as ocorrências do texto
 * i - insensitive: não diferencia maiúsculas de minúsculas
 * () - group: divide partes da regexp em grupos (posso possuir grupos dentro de outros: (()()...) )
 * | - ou: Uma coisa OU outra
 */