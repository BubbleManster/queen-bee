const enter = new KeyboardEvent('keydown', {altKey:false,
    bubbles: true,
    cancelBubble: false, 
    cancelable: true,
    charCode: 0,
    code: "Enter",
    composed: true,
    ctrlKey: false,
    currentTarget: null,
    defaultPrevented: true,
    detail: 0,
    eventPhase: 0,
    isComposing: false,
    isTrusted: true,
    key: "Enter",
    keyCode: 13,
    location: 0,
    metaKey: false,
    repeat: false,
    returnValue: false,
    shiftKey: false,
    type: "keydown",
    which: 13});

for(let i = 0; i < gameData.today.answers.length; i++){
  
  for(let j = 0; j < gameData.today.answers[i].split("").length; j++){
      // Type the letter gameData.today.answers[i].split("")[j]
      window.dispatchEvent(new KeyboardEvent('keydown', {
          'key': `${gameData.today.answers[i].split("")[j]}`
      }));
      setTimeout(() => console.log("Wait"), 1000);
  }
  document.getElementsByClassName("hive-action hive-action__submit sb-touch-button")[0].dispatchEvent(enter);
}