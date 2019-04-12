const axios = require('axios');


async function homePage(req, res) {
    let theNews = await axios.get('https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=58d03d1f371d4f4f84963a2e95de2163')
    theNews = theNews.data.articles.filter((eaArticle)=>{
        return (eaArticle.urlToImage)
    })
    res.render('home', {
        locals: {
            email: '',
            news:theNews,
            message: "you're on the homepage"
        }
    });
};


module.exports = homePage;