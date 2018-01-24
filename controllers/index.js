const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', { trendingNotTweets, notTweets })
});

module.exports = router;

const trendingNotTweets = Array(5).fill({ 
    hashtag: '#codingbreak', 
    tweetCount: 1000
})

const notTweets = Array(20).fill({
    userName: 'Robert Schaap',
    userHandle: '@colorcodedcode',
    notTweetBody: 'My cats freak out when I play air guitar #codingbreak'
})
