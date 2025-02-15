const keyboardDiv=document.querySelector(".keyboard");

const getRandomWord=()=>{
    //selecting a random word hint from wordlist
    const {word,hint}= wordList[Math.floor(Math.random()*wordList.length)];
    console.log(word,hint);
}

//creating keyboard buttons
for(let i=97; i<=122; i++){
    const button=document.createElement("button");
    button.innerText=String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}

getRandomWord();