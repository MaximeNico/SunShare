const axios = require('axios')

exports.getInfos = ((url) => axios.get(url)
  .then((response) => {
  console.log('resposne get axios helper: ', response.data)
  console.log(response)
  })
  .catch(err => {
    console.log(err)
  }))

exports.postInfos = ((url) => axios.post(url)
  .then((response) => {
    console.log('resposne post axios helper: ', response)
  })
  .catch(err => {
    console.log(err)
  }))