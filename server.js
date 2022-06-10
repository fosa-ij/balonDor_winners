const express = require('express')
const app = express()
const PORT = 8000

let balonDor = {
    'unknown': {
        name: 'INVALID BALON D"OR YEAR',
    },
    '2000': {
        name: 'Luís Figo',
        goals: '35',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2001': {
        name: 'Michael Owen',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Liverpool', 
        nationality: 'England',
    },
    '2002': {
        name: 'Ronaldo',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Brazil',
    },
    '2003': {
        name: 'Pavel Nedved',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Juventus', 
        nationality: 'Czech Republic',
    },
    '2004': {
        name: 'Andriy Shevchenko',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Ac Milan', 
        nationality: 'Ukrain',
    },
    '2005': {
        name: 'Ronaldinho',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Barcelona', 
        nationality: 'Brazil',
    },
    '2006': {
        name: 'Fabio Cannavaro',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Italy',
    },
    '2007': {
        name: 'Kaka',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Ac Milan', 
        nationality: 'Brazil',
    },
    '2008': {
        name: 'Cristiano Ronaldo',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2009': {
        name: 'Lionel Messi',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2010': {
        name: 'Lionel Messi',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2011': {
        name: 'Lionel Messi',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2012': {
        name: 'Lionel Messi',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2013': {
        name: 'Cristiano Ronaldo',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2014': {
        name: 'Cristiano Ronaldo',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2015': {
        name: 'Lionel Messi',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2016': {
        name: 'Cristiano Ronaldo',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2017': {
        name: 'Cristiano Ronaldo',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2018': {
        name: 'Luka Modric',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Real Madrid', 
        nationality: 'Croatia',
    },
    '2019': {
        name: 'Lionel Messi',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2020': {
        name: 'NOT AWARDED',
    },
    '2021': {
        name: 'Lionel Messi',
        goals: '',
        assists: '',
        appearance: '',
        img: '',
        club: 'Paris Saint-Germain F.C.', 
        nationality: 'Argentina',
    }
    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(balonDor)
}) 

app.get('/api/:year', (req, res) => {
    const balonDorYear = req.params.year
    if (balonDor[balonDorYear]){
        res.json(balonDor[balonDorYear])
    } else {
        res.json(balonDor['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`);
})