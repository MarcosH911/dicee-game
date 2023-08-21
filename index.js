window.onload = function () {
  const button = document.querySelector("button");
  const dices = document.getElementsByClassName("dice");

  button.onclick = function () {
    for (let dice of dices) {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      dice.className = "";
      dice.classList.add("dice");
      dice.classList.add("dice-" + randomNumber);
    }
  };
};
