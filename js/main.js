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

sendChatBtn.addEventListener("click", handleChat);