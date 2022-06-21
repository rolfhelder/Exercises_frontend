const getFlagModule = require('./exports')

const nome = getFlagModule('--name');
const greeting = getFlagModule('--greeting');

console.log(nome + ', ' + greeting);
