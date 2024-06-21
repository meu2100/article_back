// 引用後端框架 express
const express = require('express')
const cors = require('cors')
const router = require('./routes')

// 建立 express 實例
const app = express()

// 使用 cors 中間件，允許不同網域來的請求，免於同源策略的限制
app.use(cors())
app.use(router)
app.use(express.json())

// 設置監聽的 port (後端 URL 會是 localhost:[PORT])
const PORT = 3000

app.listen(PORT, () => {
  console.log(`express server is running on http://localhost:${PORT}`)
})
