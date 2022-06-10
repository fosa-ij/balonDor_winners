const express = require('express')
const app = express()
const PORT = 8000

let balonDor = {
    'unknown': {
        name: 'INVALID BALON D"OR YEAR',
    },
    '2000': {
        name: 'Luís Figo',
        goals: '14',
        assists: '26',
        appearance: '50',
        img: 'https://i.pinimg.com/originals/67/77/f8/6777f8cca58341397e0d4bea139c56cc.jpg',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2001': {
        name: 'Michael Owen',
        goals: '28',
        assists: '7',
        appearance: '43',
        img: 'https://static.wikia.nocookie.net/liverpoolfc/images/8/84/Owen2001.jpeg/revision/latest?cb=20210523070846',
        club: 'Liverpool', 
        nationality: 'England',
    },
    '2002': {
        name: 'Ronaldo',
        goals: '30',
        assists: '8',
        appearance: '44',
        img: 'https://futaa.com/images/crops/800/20200429ronalado%20de%20lima.jpg',
        club: 'Real Madrid', 
        nationality: 'Brazil',
    },
    '2003': {
        name: 'Pavel Nedved',
        goals: '8',
        assists: '11',
        appearance: '41',
        img: 'https://theamericanmag.com/wp-content/uploads/2017/11/article_4726_RsDEz2BHFL.jpg',
        club: 'Juventus', 
        nationality: 'Czech Republic',
    },
    '2004': {
        name: 'Andriy Shevchenko',
        goals: '26',
        assists: '8',
        appearance: '40',
        img: 'https://cdn-blog.scorum.com/production/thedreamteam/ec1e31e494f9ed19',
        club: 'Ac Milan', 
        nationality: 'Ukrain',
    },
    '2005': {
        name: 'Ronaldinho',
        goals: '26',
        assists: '24',
        appearance: '45',
        img: 'https://i.pinimg.com/originals/6b/08/94/6b08949664d7b9637861ef83cb723c5f.gif',
        club: 'Barcelona', 
        nationality: 'Brazil',
    },
    '2006': {
        name: 'Fabio Cannavaro',
        goals: '0',
        assists: '0',
        appearance: '39',
        img: 'https://rahulmadrid.files.wordpress.com/2012/01/cannavaro.jpg?w=584',
        club: 'Real Madrid', 
        nationality: 'Italy',
    },
    '2007': {
        name: 'Kaka',
        goals: '19',
        assists: '16',
        appearance: '41',
        img: 'https://img.bleacherreport.net/img/images/photos/003/713/292/hi-res-32821149253b4a9f6e58e07c886a142e_crop_north.jpg?1513238416&w=3072&h=2048',
        club: 'Ac Milan', 
        nationality: 'Brazil',
    },
    '2008': {
        name: 'Cristiano Ronaldo',
        goals: '26',
        assists: '12',
        appearance: '53',
        img: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_1:1,f_auto,q_auto,g_auto/shape/cover/sport/Manchester-United-v-Aston-Villa---Premier-League-76145ad1ad05f1ab75d99973263c96e1.jpg',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2009': {
        name: 'Lionel Messi',
        goals: '47',
        assists: '12',
        appearance: '53',
        img: 'https://pbs.twimg.com/media/FGAk1xYXIAQuyS0?format=jpg&name=large',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2010': {
        name: 'Lionel Messi',
        goals: '53',
        assists: '27',
        appearance: '55',
        img: 'https://assets-cms.thescore.com/uploads/image/file/404213/cropped_GettyImages-1059672746.jpg',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2011': {
        name: 'Lionel Messi',
        goals: '73',
        assists: '32',
        appearance: '60',
        img: 'https://pbs.twimg.com/media/DmL1HBwW4AM8DT2.jpg',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2012': {
        name: 'Lionel Messi',
        goals: '60',
        assists: '17',
        appearance: '50',
        img: 'https://www.si.com/.image/t_share/MTY4MTAyNTc1MzI1NzgzMzEz/2012-1007-lionel-messijpg.jpg',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2013': {
        name: 'Cristiano Ronaldo',
        goals: '51',
        assists: '17',
        appearance: '47',
        img: 'https://i.pinimg.com/originals/d6/fa/c3/d6fac379a706eaf00caf94ac630455ad.jpg',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2014': {
        name: 'Cristiano Ronaldo',
        goals: '61',
        assists: '23',
        appearance: '54',
        img: 'https://pbs.twimg.com/media/DCczInzWAAIpCYt?format=jpg&name=4096x4096',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2015': {
        name: 'Lionel Messi',
        goals: '41',
        assists: '24',
        appearance: '49',
        img: 'https://pbs.twimg.com/media/D412WEAXsAADE2x.jpg',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2016': {
        name: 'Cristiano Ronaldo',
        goals: '42',
        assists: '12',
        appearance: '46',
        img: 'https://pbs.twimg.com/media/E8MzSbRX0AMiCZI.jpg',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2017': {
        name: 'Cristiano Ronaldo',
        goals: '44',
        assists: '8',
        appearance: '44',
        img: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0403%2Fr351051_1296x729_16%2D9.jpg',
        club: 'Real Madrid', 
        nationality: 'Portugal',
    },
    '2018': {
        name: 'Luka Modric',
        goals: '2',
        assists: '8',
        appearance: '43',
        img: 'https://www.sportphotogallery.com/content/images/cmsfiles/product/30142/30768-list.jpg',
        club: 'Real Madrid', 
        nationality: 'Croatia',
    },
    '2019': {
        name: 'Lionel Messi',
        goals: '31',
        assists: '27',
        appearance: '44',
        img: 'https://staticg.sportskeeda.com/editor/2021/08/a0537-16282497138728-800.jpg',
        club: 'Barcelona', 
        nationality: 'Argentina',
    },
    '2020': {
        name: 'NOT AWARDED',
    },
    '2021': {
        name: 'Lionel Messi',
        goals: '38',
        assists: '14',
        appearance: '47',
        img: 'https://pbs.twimg.com/media/FFa5UgUX0AgvK2m.jpg',
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