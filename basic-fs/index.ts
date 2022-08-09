import fs from  'fs'

fs.readFile('./files/start.txt', 'utf-8', (err, fileToOpen) => {
  fs.readFile(`./files/${fileToOpen}`, 'utf-8', (err, firstText) => {
    fs.readFile('./files/append.txt', 'utf-8', (err, appendixText) => {
      fs.writeFile('./files/final.txt', `${firstText}\n${appendixText}`, 'utf-8', err => {
        if (err) return console.log(err)
        return console.log('File written.')
      })
    })
  })
})