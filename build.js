const ejs = require('ejs');
const fs = require('fs');

const teamMember = [
    {
        name: "Brandon Earwood",
        role: "Faculty Advisor",
        email: "bearwood@tamusa.edu"
    },
    {
        name: "Julian Spindola",
        role: "President",
        email: "jspin01@jaguar.tamu.edu"
    },
    {
        name: 'Mariana Lozano',
        role: 'Vice President',
        email: 'mloza019@jaguar.tamu.edu'
    },
    {
        name: 'Crystina Brown',
        role: 'Secretary',
        email: 'cbrow040@jaguar.tamu.edu'
    },
    {
        name: 'Hugo Padilla',
        role: 'Treasurer',
        email: 'hpadi02@jaguar.tamu.edu'
    },
    {
        name: "Alexis Parson",
        role: "Compliance/Constitution<br>Officer",
        email: "apars03@jaguar.tamu.edu"
    },
    {
        name: 'Trieu Do',
        role: 'Director of Operations',
        email: 'tdo02@jaguar.tamu.edu'
    },
    {
        name: 'Liliana Martinez',
        role: 'Fundraising Director',
        email: 'lmart0151@jaguar.tamu.edu'
    },
    {
        name: 'Kevin Hernandez',
        role: 'Marketing Officer',
        email: 'khern0110@jaguar.tamu.edu'
    },
    {
        name: 'Eric Gerner',
        role: 'Marketing Officer',
        email: 'egern01@jaguar.tamu.edu'
    },
    {
        name: 'Lorenzo Sosa',
        role: 'Outreach Coordinator',
        email: 'lsosa08@jaguar.tamu.edu'
    },
    {
        name: 'Hawaau Adisa',
        role: 'Recuritment Retention Officer',
        email: 'hadis01@jaguar.tamu.edu'
    },
    {
        name: 'Aby Babu Alappat',
        role: 'Risk Management Officer',
        email: 'a01@jaguar.tamu.edu'
    },
    {
        name: 'Isabel Villarreal',
        role: 'Travel Coordinator',
        email: 'ivill018@jaguar.tamu.edu'
    }
]

// Render index.html file
ejs.renderFile('index.ejs', { title: 'ACM - TAMUSA' }, (err, html) => {
    if (err) throw err;
    fs.writeFileSync('index.html', html);
    console.log('Generated index.html');
})

// Render team.html file,  pass title and teamMember variable to ejs file
ejs.renderFile('team.ejs', { title: 'ACM - TAMUSA', teamMember }, (err, html) => {
    if (err) throw err;
    fs.writeFileSync('team.html', html);
    console.log('Generated team.html');
})