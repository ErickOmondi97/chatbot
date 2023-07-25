<<<<<<< HEAD
const chatInput = document.querySelector(".chat-input text-area");

const sendChatBtn = document.querySelector(".chat-input span");

const chatBox = document.querySelector("chatbox");

let userMessage;
const API_KEY = "";

const createChatLi = (message, className) => {

  //Chat <li> element is created with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
}

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatLi.querySelector("p");

  //The Properties and message for the API request are defined below:
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: userMessage}]
    })
  }

  //Send POST request to API, get response
  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    messageElement.textContent = data.choices[0].message.content;
  }).catch(error) => {
    messageElement.textContent = data.choices[0].message.content;
  }
}

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return;


  //User's Message is Appended to the Chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    //Display "Thinking..." text while waiting for response
    const incomingChatLi = createChatLi("Thinking...", "incoming")
    chatbox.appendChild(incomingChatLi);
    generateResponse(incomingChatLi);
  }, 600);
};

=======
const chatInput = document.querySelector(".chat-input text-area");

const sendChatBtn = document.querySelector(".chat-input span");

const chatBox = document.querySelector("chatbox");

let userMessage;

const createChatLi = (message, className) => {

  //Chat <li> element is created with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
}

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return;


  //User's Message is Appended to the Chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
}

>>>>>>> 222308b0f8e67c019b0a618b8a078eac88bf175b
sendChatBtn.addEventListener("click", handleChat);