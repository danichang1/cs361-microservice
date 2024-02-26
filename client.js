const axios = require('axios')

const videoLink = {
    link : "https://www.youtube.com/watch?v=YYsReoZMj1k"
}

axios.post('http://localhost:5555/speechToText', videoLink)
    .then(res => {
        console.log(res.data)
    })