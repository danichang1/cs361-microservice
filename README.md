# cs361-microservice

This repository contains my microservice for my partner's Youtube transcription app (server.js) as well as a file to test that the microservice works (client.js)

## How to REQUEST Data

Before calling the microservice, ensure that you have all packages installed by running the following line in your console:
```
npm i
```

Then, create an AssemblyAI account to get your unique API key. Create an environment variable storing the API key by running the following line in your console:
```
$Env:ASSEMBLYAI_API_KEY = "<enter your API key here>"
```

To request data from the microservice, make a POST request with to /speechToText using Axios. This request should contain a JSON object with the YouTube link as a string. I currently have server.js running on port 5555, so an example request would look like this:
```
const videoLink = {
    link : "https://www.youtube.com/watch?v=YYsReoZMj1k"
};

axios.post('http://localhost:5555/speechToText', videoLink);
```

## How to RECEIVE Data

The Axios request will send back a response with the transcript as a string. To access the transcript, use res.data. Here is an example that would print the transcript to the console:
```
axios.post('http://localhost:5555/speechToText', videoLink)
    .then(res => {
        console.log(res.data)
    })
```
## UML Sequence Diagram
![microservice_UML](https://github.com/danichang1/cs361-microservice/assets/99048536/cc445256-6a5c-4ca3-89d7-473ff4eac06b)

