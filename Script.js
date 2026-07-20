"use strict";

/* ==========================
   ChatIn
   Script.js
   Part 1
========================== */

/* ========= ELEMENT ========= */

const chatContainer = document.getElementById("chatContainer");
const promptInput = document.getElementById("prompt");

const sendBtn = document.getElementById("sendBtn");

const typingIndicator =
document.getElementById("typingIndicator");

const settingBtn =
document.getElementById("settingBtn");

const settingsModal =
document.getElementById("settingsModal");

const apiKeyInput =
document.getElementById("apiKey");

const saveSetting =
document.getElementById("saveSetting");

const closeSetting =
document.getElementById("closeSetting");

/* ========= DATA ========= */

let messages = [];

/* ========= SETTINGS ========= */

function loadSettings(){

    apiKeyInput.value =
    localStorage.getItem("chatin_api")
    || "";

}

function saveSettings(){

    localStorage.setItem(

        "chatin_api",

        apiKeyInput.value.trim()

    );

    settingsModal.hidden = true;

}

/* ========= CHAT ========= */

function addMessage(role,content){

    messages.push({

        role:role,

        content:content

    });

    renderMessages();

}

function renderMessages(){

    chatContainer.innerHTML = "";

    messages.forEach(msg=>{

        const bubble =
        document.createElement("div");

        bubble.className =
        "message " + msg.role;

        bubble.textContent =
        msg.content;

        chatContainer.appendChild(bubble);

    });

    scrollBottom();

}

/* ========= UTIL ========= */

function scrollBottom(){

    chatContainer.scrollTop =
    chatContainer.scrollHeight;

}

/* ========= EVENT ========= */

window.onload = ()=>{

    loadSettings();

};

settingBtn.onclick = ()=>{

    settingsModal.hidden = false;

};

closeSetting.onclick = ()=>{

    settingsModal.hidden = true;

};

saveSetting.onclick =
saveSettings;

promptInput.addEventListener(

    "keydown",

    e=>{

        if(

            e.key==="Enter"

            &&

            !e.shiftKey

        ){

            e.preventDefault();

            sendBtn.click();

        }

    }

);
