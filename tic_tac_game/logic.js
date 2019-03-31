"use strict";
let item1 = document.querySelector(".ex");
let item2 = document.querySelector(".dex");
let counter = 0;
let overlay = document.querySelector(".overlay");
let winnerText = document.querySelector(".winner-text");
let closeBtn = document.querySelector(".close-btn");
let container = document.querySelector(".container");
let reset = document.querySelector(".reset");

reset.addEventListener("click", function() {
  location.reload();
});

closeBtn.addEventListener("click", function() {
  overlay.classList.add("hide");
});

container.addEventListener("click", game, false);

function game(event) {
  let target = event.target;
  if (target.className != "cell") return; //
  if (target.children[0] != null) {
    return;
  }
  if (counter % 2 === 0) {
    let x = item1.cloneNode(true);
    x.style.display = "block";
    target.classList.add("cross");
    target.appendChild(x);
    counter++;
  } else {
    let y = item2.cloneNode(true);
    y.style.display = "block";
    target.classList.add("zero");
    target.appendChild(y);
    counter++;
  }
  function check() {
    let cells = document.querySelectorAll(".cell");
    let spans = document.querySelectorAll(".container span");
    if (
      cells[0].classList.contains("cross") &&
      cells[3].classList.contains("cross") &&
      cells[6].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[1].classList.contains("cross") &&
      cells[4].classList.contains("cross") &&
      cells[7].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[2].classList.contains("cross") &&
      cells[5].classList.contains("cross") &&
      cells[8].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[0].classList.contains("cross") &&
      cells[1].classList.contains("cross") &&
      cells[2].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[3].classList.contains("cross") &&
      cells[4].classList.contains("cross") &&
      cells[5].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[6].classList.contains("cross") &&
      cells[7].classList.contains("cross") &&
      cells[8].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[0].classList.contains("cross") &&
      cells[4].classList.contains("cross") &&
      cells[8].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[2].classList.contains("cross") &&
      cells[4].classList.contains("cross") &&
      cells[6].classList.contains("cross")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Крестики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    }
    //Проверка нулей
    else if (
      cells[0].classList.contains("zero") &&
      cells[3].classList.contains("zero") &&
      cells[6].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[1].classList.contains("zero") &&
      cells[4].classList.contains("zero") &&
      cells[7].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[2].classList.contains("zero") &&
      cells[5].classList.contains("zero") &&
      cells[8].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[0].classList.contains("zero") &&
      cells[1].classList.contains("zero") &&
      cells[2].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[3].classList.contains("zero") &&
      cells[4].classList.contains("zero") &&
      cells[5].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[6].classList.contains("zero") &&
      cells[7].classList.contains("zero") &&
      cells[8].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[0].classList.contains("zero") &&
      cells[4].classList.contains("zero") &&
      cells[8].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    } else if (
      cells[2].classList.contains("zero") &&
      cells[4].classList.contains("zero") &&
      cells[6].classList.contains("zero")
    ) {
      setTimeout(function() {
        winnerText.textContent = "Нолики выйграли";
        overlay.classList.toggle("hide");
      }, 300);
      removeit();
      function removeit() {
        container.removeEventListener("click", game, false);
      }
    }
    //Проверка ничьи
    else if (spans.length == 9) {
      setTimeout(function() {
        winnerText.textContent = "Ничья";
        overlay.classList.toggle("hide");
      }, 300);
    }
  }
  check();
}
