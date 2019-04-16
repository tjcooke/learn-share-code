const axios = require('axios');


async function homePage(req, res) {
    const theNews = await axios.get('https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=58d03d1f371d4f4f84963a2e95de2163')
    console.log('44444444444444444444')
    console.log(theNews.data.articles)
    let myNews = theNews.data.articles.filter((eaArticle) => {
        return (eaArticle.urlToImage)
    })
    let myRSS =
        res.render('home', {
            locals: {
                email: '',
                news: myNews,
                message: "you're on the homepage"
            }
        });
};


module.exports = homePage;