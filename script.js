let random_1, random_2, random_3, random_4;
let load_1, load_2, load_3, load_4;

random_4_number();
//tsipr davhardahgui 4 too oloh heseg
function random_4_number() {
  guessField.value = "";
  guessField.focus();
  random_1 = random_number(10);
  console.log("random_1=", random_1);
  do {
    random_2 = random_number(10);
    console.log("random_2=", random_2);
  } while (random_2 == random_1);
  do {
    random_3 = random_number(10);
    console.log("random_3=", random_3);
  } while (random_3 == random_1 || random_3 == random_2);
  do {
    random_4 = random_number(10);
    console.log("random_4=", random_4);
  } while (
    random_4 == random_1 ||
    random_4 == random_2 ||
    random_4 == random_3
  );

  //etssiin utgiig hevlej shalgah
  console.log("final_number=", random_1, random_2, random_3, random_4);
}

//ugugdsun toond bagtan sanamsargui 1 utga avah
function random_number(number) {
  {
    return Math.floor(Math.random() * number);
  }
}

const guessSubmit = document.querySelector(".guessSubmit");
let status, game, resetButton;
let resultDiv = document.querySelector(".result");

//hereglegchiin oruulsan toog sanasan tootoi jishih heseg
function checkNumber() {
  let userGuess = Number(guessField.value);
  //let inputType = typeof userGuess garaas oruulsan utga too esehiig shalganaa

  let l1, l2, l3, l4;
  l1 = (userGuess - (userGuess % 1000)) / 1000;
  l2 = ((userGuess % 1000) - (userGuess % 100)) / 100;
  l3 = ((userGuess % 100) - (userGuess % 10)) / 10;
  l4 = userGuess % 10;

  let a = 0,
    b = 0;
  if (random_1 == l1) a++;
  if (random_2 == l2) a++;
  if (random_3 == l3) a++;
  if (random_4 == l4) a++;

  if (l1 == random_2 || l1 == random_3 || l1 == random_4) b++;
  if (l2 == random_1 || l2 == random_3 || l2 == random_4) b++;
  if (l3 == random_2 || l3 == random_1 || l3 == random_4) b++;
  if (l4 == random_2 || l4 == random_3 || l4 == random_1) b++;

  status = document.createElement("p");
  status.setAttribute("id", "p1");
  status.textContent =
    l1 +
    " " +
    l2 +
    " " +
    l3 +
    " " +
    l4 +
    " |  a = " +
    a +
    " " +
    "b = " +
    b +
    " ";
  resultDiv.append(status);

  guessField.value = "";
  guessField.focus();

  if (a == 4) {
    game = document.createElement("label");
    game.textContent = "You won!!!";
    game.style.backgroundColor = "green";
    resultDiv.append(game);
    setGameOver();
  }
}

guessSubmit.addEventListener("click", checkNumber);

//enter darahad button darahtai ijil function duudaj bga heseg
document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Enter") {
      checkNumber();
    }
  },
  false
);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  while (resultDiv.firstChild) {
    resultDiv.removeChild(resultDiv.firstChild);
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  random_4_number();
}
