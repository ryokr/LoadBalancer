const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
   res.send('Response from Service 1 in Account 1')
})

app.listen(port, () => {
   console.log(`Service 1 running on port ${port}`)
})
