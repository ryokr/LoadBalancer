const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

const service1Url = process.env.web1
const service2Url = process.env.web2

let counter = 0

app.use(async (req, res) => {
   try {
      // Alternate between services using round-robin
      const targetUrl = counter % 2 === 0 ? service1Url : service2Url
      counter++

      // Forward the request to the selected service
      const response = await axios({
         method: req.method,
         url: targetUrl + req.originalUrl,
         data: req.body,
         headers: req.headers,
      })

      // Send the response from the target service back to the client
      res.status(response.status).send(response.data)
   } catch (error) {
      console.error('Error while forwarding the request:', error)
      res.status(500).send('Internal Server Error')
   }
})

app.listen(port, () => {
   console.log(`Load Balancer running on http://localhost:${port}`)
})
