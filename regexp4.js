const { html } = require('./base')

const greedyRegexp = /<.+>.+<\/.+>/g
const nonGreedyRegexp = /<.+?>.+?<\/.+?>/g

console.log('Greedy', html.match(greedyRegexp))
console.log('Non-greedy', html.match(nonGreedyRegexp))