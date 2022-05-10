    // // (function (exports, requier, module, __dirname, __filename) {   
    // const chalk = require('chalk')
    // const text = require('./data')

    // console.log(chalk.blue(text))

    // console.log(__filename)

    // // })

const http = require('http')
const fs = require('fs') //Для того, чтобы работать с файлами его и Path
const path = require('path')


// Мы создали сервер и создали мультистраничный сайт, более подробно можно посмотреть (https://www.youtube.com/watch?v=3aGSqasVPsI&t=550s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD) с 40 минуты
const server = http.createServer((req, res) => { // реквест- получение информации, респонс - ответ сревера
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }

  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   }) 
  // } else if (req.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }

  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //     res.end(data)
  //   }) 
  // } 


  //res.end('<h1>Hello NodeJS!!!</h1>') // завершить ответ с сервера
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url)
  const ext = path.extname(filePath) // Добавляем проверку наличия contact.html
  let contentType = 'rext/html' //Применяем стили, с помощью switch

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {      // Кейс в случае, если произошла ошибка на этапе чтения
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
  })
})

const PORT = process.env.PORT || 3000 // Работа с портами, системный порт иначе ставим 3000

server.listen(PORT, () => { // обратившись к объекту сервер, метод listen (Порт, и далее какая-то ифнормация)
  console.log(`Server hasc been started${PORT}...`);
})