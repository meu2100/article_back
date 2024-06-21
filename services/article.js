//處理邏輯
//取得文章列表
exports.getArticles = (req, res) => {
  const articles = [
    { id: 1, title: '文章一', content: '這是第1篇文章'},
    { id: 2, title: '文章二', content: '這是第2篇文章' }
  ];
  res.json(articles);
};

//新建文章
exports.createArticles = (req, res) =>{
  const newArticle = [
    { id: 3, title: '文章三', content: '這是新文章'}
  ];
  res.json(newArticle)
};

//更新文章
exports.renewArticles = (req, res) =>{
  const updatedArticle = [
    { id: req.params.id, title: '更新後的文章', content: '此文章經過更新' }
  ];
  res.json(updatedArticle)
}