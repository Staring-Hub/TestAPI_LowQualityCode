import React from 'react';
import ReactDOM from 'react-dom';
import { process } from '/env'
import { Configuration, OpenAIApi } from 'openai'

const setupTextarea = document.getElementById('setup-textarea')
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

document.getElementById("send-btn").addEventListener("click", async () => {
  // if (setupTextarea.value) {
  setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
  movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
  // }
  // await fetchBotReply()
})

//Render the chatbotComponent
ReactDOM.render(
  <ChatComponent />,
  document.getElementById('root')
);

async function fetchBotReply() {
  const promptText = setupTextarea.value || 'Sound enthusiastic in five words or less.'
  const response = await openai.createCompletion({
    'model': 'text-davinci-003',
    'prompt': 'Sound enthusiastic in five words or less.'

  })
  movieBossText.innerText = response.data.choices[0].text.trim()
  setupInputContainer.innerHTML = `<textarea id="setup-textarea" placeholder="Enter your prompt here..."></textarea>`
}

// async function fetchBotReply() {
//   const response = await openai.createCompletion({
//     'model': 'text-davinci-003',
//     'prompt': 'Sound enthusiastic in five words or less.'
//   })
//   movieBossText.innerText = response.data.choices[0].text.trim()
// }

// async function postRequest() {
//   const response = await fetch('https://line-gpt-app-ogcot.ondigitalocean.app/chat?username=hazdik', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "message": "give me chinese food recommendation"
//     })
//   });

//   const data = await response.json();
//   console.log(data);
// }

postRequest();