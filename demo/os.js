// Информация об операционной системе, в которой мы находимся
const os = require('os')

console.log('Операционная система: ', os.platform());

console.log('Аохитектура процессора: ', os.arch());

console.log('Информация по процессорам: ', os.cpus());

console.log('Свободная память: ', os.freemem());

console.log('Всего памяти: ', os.totalmem()); //Вся память

console.log('Домашняя директория: ', os.homedir());

console.log('Включен: ', os.uptime())