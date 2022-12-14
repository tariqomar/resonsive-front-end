let chatboxBottom = document.querySelector('.chat-box__bottom');
let textBox = document.querySelector(".chat-box__bottom__textbox input");
let emojiButton = document.querySelector(".chat-box__bottom__emoji-keyboard");
let emojiBox = document.querySelector('.emoji-box');
let messageBox = document.querySelector(".chat-box__main");
let welcomeMessage = "Nice !! ๐";
let autoreplyMessage = "๐";
let emojis = ["๐","๐","๐","๐","๐","๐","๐","๐คฃ","๐ฅฒ","โบ๏ธ","๐","๐","๐","๐","๐","๐","๐","๐ฅฐ","๐","๐","๐","๐","๐","๐","๐","๐","๐คช","๐คจ","๐ง","๐ค","๐","๐ฅธ","๐คฉ","๐ฅณ","๐","๐","๐","๐","๐","๐","๐","โน๏ธ","๐ฃ","๐","๐ซ","๐ฉ","๐ฅบ","๐ข","๐ญ","๐ค","๐ ","๐ก","๐คฌ","๐คฏ","๐ณ","๐ฅต","๐ฅถ","๐ฑ","๐จ","๐ฐ","๐ฅ","๐","๐ค","๐ค","๐คญ","๐คซ","๐คฅ","๐ถ","๐","๐","๐ฌ","๐","๐ฏ","๐ฆ","๐ง","๐ฎ","๐ฒ","๐ฅฑ","๐ด","๐คค","๐ช","๐ต","๐ค","๐ฅด","๐คข","๐คฎ","๐คง","๐ท","๐ค","๐ค","๐ค","๐ค ","๐","๐ฟ","๐น","๐บ","๐คก","๐ฉ","๐ป","๐","โ ๏ธ","๐ฝ","๐พ","๐ค","๐","๐บ","๐ธ","๐น","๐ป","๐ผ","๐ฝ","๐","๐ฟ","๐พ"];


let validInputs = {};

function getTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes =
    date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  let currentTime =
    hour > 12 ? `${hour % 12}:${minutes} PM` : `${hour}:${minutes} AM`;
  return currentTime;
}

function createUserMessage(message) {
  let timestamp = createUserTimestamp();
  let dialogueBox = document.createElement("div");
  dialogueBox.classList.add("chat-bubble--user");
  dialogueBox.classList.add("new-message");
  dialogueBox.innerHTML = message;
  dialogueBox.appendChild(timestamp);
  return dialogueBox;
}

function createUserTimestamp() {
  let timestamp = document.createElement("span");
  let currentTime = getTime();
  timestamp.classList.add("time-stamp--right");
  timestamp.innerHTML = currentTime;
  return timestamp;
}

function createBotMessage(message) {
  let timestamp = createBotTimestamp();
  let dialogueBox = document.createElement("div");
  dialogueBox.classList.add("chat-bubble--bot");
  dialogueBox.classList.add("new-message");
  dialogueBox.innerHTML = message;
  dialogueBox.appendChild(timestamp);
  return dialogueBox;
}

function createBotTimestamp() {
  let timestamp = document.createElement("span");
  let currentTime = getTime();
  timestamp.classList.add("time-stamp--left");
  timestamp.innerHTML = currentTime;
  return timestamp;
}

function autoreply() {
  let message = createBotMessage(autoreplyMessage);
  setTimeout(() => {
    messageBox.appendChild(message);
    scrollToLastMessage();
  }, 1500);
}

function scrollToLastMessage() {
  messageBox.scrollTop = messageBox.scrollHeight;
}

textBox.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && textBox.value != "") {
    let dialogueBox = createUserMessage(textBox.value);
    messageBox.appendChild(dialogueBox);
    textBox.value = "";
    autoreply();
    scrollToLastMessage();
  }
});

window.addEventListener("load", () => {
  let dialogueBox = createBotMessage(welcomeMessage);
  messageBox.appendChild(dialogueBox);
});

emojis.forEach(emoji => {
  let el = document.createElement('span');
  el.classList.add('emoji-box__emoji');
  el.innerText = emoji;
  emojiBox.appendChild(el);
  el.addEventListener('click', () => {
    textBox.value += emoji;
  });
});


emojiButton.addEventListener("click", () => {
  emojiBox.classList.toggle('hidden');
});