
const express = require('express');
const router = express.Router()
const {Feed} = require('../modules/module')
// const { getRequest, post} = require('../controllers/controller')


router.all('/',(req,res)=>{
    if(req.method === 'GET'){
        Feed.find()
        .then(result => res.render('home',{result:result,title: 'Feed'}),console.log('goood'))
        .catch(err=> console.log(err))}
         
    if(req.method === 'POST'){
        const feed = new Feed(req.body)
        feed.save()
        .then(result => res.redirect('/'))
        .catch(err=> console.log(err))
        console.log('2 goood')
        console.log(req.body)
    }}
)




router.get('/new_message', (req,res) =>{ 
})



// router.get('/new_message', post)

module.exports = router