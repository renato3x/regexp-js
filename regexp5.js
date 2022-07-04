const { alphabet, cpfs, ips } = require('./base')

/**
 * quando colocamos ^ em um conjunto [], significa
 * que o regexp pegará tudo, menos aquilo que está
 * no conjunto
 */

console.log(alphabet)
console.log(alphabet.match(/[^a-c1-3]+/gi))

console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g))




const isNotANumber = string => /\D/.test(string)

function formatCPF(string = '') {
  if (isNotANumber(string)) {
    throw new Error('The string is NaN')
  }

  return string.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

function formatIP(string = '') {
  if (isNotANumber(string)) {
    throw new Error('The string is NaN')
  }

  return string.replace(/(\d{1,3})(\d{1,3})(\d{1,3})(\d{1,3})/, '$1.$2.$3.$4')
}

