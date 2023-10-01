const getFox = async () => {
  const res = await fetch("https://api.masoudkf.com/v1/wordle", {
    headers: {
      "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
    },
  }); 
  let json = await res.json();
  let { dictionary } = json;
  let rand = Number.parseInt(Math.random() * 21)
  let {word, hint} = dictionary[rand];
  console.log(dictionary)
 
  window.addEventListener("keyup", (event) => {
    const keys = event.key;
    if (win == 0 && currentBox != 4) {
      if (keys === "Backspace" && col > 0) {
        col--;
        document.getElementById(tiles[row][col]).innerHTML = "";
      } else if (keys === "Enter") {
        if (col === 4) {
          let letter = 0;
          let incorrect = 0;
          currentBox++;
          let temp = Array.from(word, letter => letter.toUpperCase());
          let temporary = [0, 0, 0, 0];
          for (let i = 0; i < 4; i++) {
            const square = document.getElementById(tiles[row][i]);
            let str = square.textContent;
            if (str.toUpperCase() === temp[i]) {
              square.classList.add("correct");
              letter++;
              incorrect++;
              temp[i] = "";
              temporary[i] = 1;
            }
          }
          for (let i = 0; i < 4; i++) {
            const square = document.getElementById(tiles[row][i]);
            let str = square.textContent;
            if (temporary[i] === 0 && temp.includes(str.toUpperCase())) {
              square.classList.add("location");
              let location = temp.indexOf(str.toUpperCase());
              temp[location] = "";
              incorrect++;
            }
          }
          for (let i = 0; i < 4; i++) {
            const square = document.getElementById(tiles[row][i]);
            square.classList.add("incorrect");
            incorrect++;
          }

          if(letter == 4){
            winn();
          }
          else if(incorrect != 8 && row ==3){
            losse();
          }

        } else {
          window.alert("first complete the word");
        }
      } else if (col !== 4) {
        if (char.includes(keys.toLowerCase())) {
          document.getElementById(tiles[row][col]).innerHTML = keys.toUpperCase();
          col++;
        }
      }
      if (col === 4 && currentBox === 1 && temp1 === 0) {
        row = 1;
        col = 0;
        temp1 = 1;
      }
      if (col === 4 && currentBox === 2 && temp2 === 0) {
        row = 2;
        col = 0;
        temp2 = 1;
      }
      if (col === 4 && currentBox === 3 && temp3 === 0) {
        row = 3;
        col = 0;
        temp3 = 1;
      }
    }
  });
  
  function winn(){
    const board = document.getElementById("delet");
    const parent = board.parentNode;
    parent.removeChild(board);
    document.getElementById("img").src ="https://res.cloudinary.com/mkf/image/upload/v1675467141/ENSF-381/labs/congrats_fkscna.gif";
    var x = document.getElementById("win");
    x.innerText = "You Won !!!";
    if (x.classList.contains("hide1")) {
      x.style.display="block"
      x.classList.remove("hide1")
    } else {
      x.style.display= "none";
      x.classList.add("hide1")
    }

  }

  function losse(){
    var x = document.getElementById("lose");
    x.innerText = "Incorrect Guesses. The correct word is: " + word;
    if (x.classList.contains("hide")) {
      x.style.display="block"
      x.classList.remove("hide")
    } else {
      x.style.display= "none";
      x.classList.add("hide")
    }
  }

  button2.onclick = function hints() {
    var x = document.getElementById("mydiv");
    x.innerText = "Hint: "+hint;
    if (x.classList.contains("hidden")) {
      x.style.display="block"
      x.classList.remove("hidden")
    } else {
      x.style.display= "none";
      x.classList.add("hidden")
    }
  };

}

let tiles = [['x1', 'x2', 'x3', 'x4'], ['x5', 'x6', 'x7', 'x8'], ['x9', 'x10', 'x11', 'x12'], ['x13', 'x14', 'x15', 'x16']]

getFox();

var button1 = document.getElementById('toggle1');
var button2 = document.getElementById('toggle2');
var button3 = document.getElementById('toggle3');
var button4 = document.getElementById('re');
var tip = document.getElementById('hint');
var element = document.body;
var boxes  = document.getElementsByClassName("box");
let col = 0;
let row = 0;
let currentBox = 0;
let win = 0;
let temp1 = 0;
let temp2 = 0;
let temp3 = 0;

button1.onclick = function darkfunc(){
  var footer = document.getElementById('fo');
  element.classList.toggle('light-dark');
  button1.classList.toggle('light-dark');
  button2.classList.toggle('light-dark');
  button3.classList.toggle('light-dark');  
  for(var i=0; i<boxes.length;i++){
    boxes[i].classList.toggle('light-dark');
  }

  if (footer.getAttribute("class") == "footer"){
    footer.setAttribute("class", "foot");
  } else{
    footer.setAttribute("class", "footer");
  }
}

button3.onclick = function inst(){
  var board = document.getElementById("delet");
  var instructions = document.getElementById("instruc");

  if (instructions.classList.contains("ins")) {
    instructions.style.display="block"
    instructions.classList.remove("ins")
    instructions.classList.add("ins1")
  } else {
    instructions.style.display= "none";
    instructions.classList.add("ins")
  }

  if (board.getAttribute("class") == "board"){
    board.setAttribute("class", "instructions");
  } else{
    board.setAttribute("class", "board");
  }

  if (button4.getAttribute("class") == "ret"){
    button4.setAttribute("class", "ret1");
  } else{
    button4.setAttribute("class", "ret");
  }
}

function restart(){
  window.location.reload();
}

let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];