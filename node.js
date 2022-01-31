const {uuids, Base64, BaseURL} = require('./static/utils')
const axios = require('axios');
const express = require('express');
const app = express()
const port = 3000
const delay = (ms = 10) => new Promise(r => setTimeout(r, ms));
const apiCalled = {}

async function callTheAPI(uuids){
      
      for(let i = 0; i < uuids.length; i++){
          if(apiCalled.hasOwnProperty(uuids[i])){
            console.log("already called");
          }
          else{
            if(i%5 == 0){
              await delay()
            }
            const promises = await axios.get(`${BaseURL}/${uuids[i]}`, {
              headers: {
                'Authorization': Base64.encode(uuids[i])
              }
            })
            .then((res) => {
              console.log(res.data);
              apiCalled[uuids[i]] = res.data
              return res.data
            })
            .catch((error) => {
              console.error(error)
            })
          }
          
      }
      
  }

app.get('/', async (req, res) => {

  // console.log(req.query);
  await callTheAPI(uuids)
  res.send(apiCalled)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})