const express = require('express')
const app = express()
const port = process.env.PORT || 3002

app.get('/', (req, res) => {
   res.send('Response from Service 2 in Account 2')
})

app.listen(port, () => {
   console.log(`Service 2 running on port ${port}`)
})
