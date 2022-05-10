//File System
const fs = require('fs')
const path = require('path') // для работы с путями, подключаем модуль path

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }

//   console.log('Папка создана');
// })



const filePath = path.join(__dirname, 'test', 'text.txt') // Создаем строчку, в которой будет храниться файл

// fs.writeFile(filePath, 'Hello NodeJS!', (err) => { // Создаем файл в папке, при это если повторно вызовем метод, он полностью перетирает текущий контент, то есть если есть изменения изменит, а если нет изменений ничего не произойдёт
//   if (err) {
//     throw err
//   }

//   console.log('Файл создан');
//   // Но если мы не хотим перетереть файл, а наоборот добавить к нему
//   // Вместо writeFile используем appendFile
//   fs.appendFile(filePath, '\nHello Again!', (err) => { // \n - это символ переноски на новую строку
//     if (err) {
//       throw err
//     }
  
//     console.log('Файл создан');
//   })
// })


// Чтение файлов 

fs.readFile(filePath, 'utf-8', (err, content) => { //второй способ, мы добавляем вторым параметром передаем название колировки "utf-8"
  if (err) {
    throw err
  }

  console.log(content);
  // const data = Buffer.from(content)          // преобразовывем буферы в текст
  // console.log('Content: ', data.toString());
})