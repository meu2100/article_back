//處理crud
const express = require('express')
const router = express.Router()
const Service = require('../services/article')
const db = require('../models')
const Article = db.Article

//取得文章列表
router.get('/articles', Service.getArticles)

router.get('/articles/new', Service.createArticles)

router.post('/articles', (req, res) => {
	const title = req.body.title

	return Article.create({ title })
		.then(() => {
			return res.redirect('/articles')
		})
});

router.get('/articles/:id', Service.renewArticles)
router.put('/articles', (req, res) =>{
  const { title, content }= req.body
	const id = req.params.id

  return Article.update({ title, content }, { where:{ id }})
  .then(()=>res.redirect(`/articles/${id}`))
})

router.delete('/articles/:id', (req, res) => {
	const id = req.params.id

	return Article.destroy({ where: { id }})
		.then(() => res.redirect('/articles'))
})


module.exports = router


//const articleDatabase = require('../Service/article')
//const articledatabase = require('../public/articledatabase')
