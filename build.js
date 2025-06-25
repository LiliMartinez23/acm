const ejs = require('ejs');
const fs = require('fs');

ejs.renderFile('index.ejs', {title: 'ACM - TAMUSA'}, (err,html) => {
    if (err) throw err;
    fs.writeFileSync('index.html', html);
    console.log('Generated index.html');
})
ejs.renderFile('team.ejs', {title: 'ACM - TAMUSA'}, (err,html) => {
    if (err) throw err;
    fs.writeFileSync('team.html', html);
    console.log('Generated team.html');
})