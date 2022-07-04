// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m -> multiline

const { cpfs2, files } = require('./base')

const cpf = '111.111.111-11'
const cpfRegexp = /^(\d{3}\.){2}\d{3}-\d{2}$/gm;

console.log(cpf.match(cpfRegexp))
console.log(cpfs2.match(cpfRegexp))

console.log(files.filter(file => (/\.jpg$/i).test(file)))