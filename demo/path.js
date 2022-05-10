const path = require('path')

console.log('Название файла:', path.basename(__filename))

console.log('Имя директории:', path.dirname(__filename))

console.log('Расширение файла:', path.extname(__filename))


console.log('Parse: ', path.parse(__filename).name) // Метод Parse, выдает объект у которого присутствуют ключи с параметрами данного файла, которые мы можем использовать

console.log(path.join(__dirname, 'server', 'index.html')) //Метод для работы с путями, данный метод формирует путь