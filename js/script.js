
var backpackBackgroundColor = document.getElementById('backpack');
// console.log(backpackBackgroundColor);
backpackBackgroundColor.style.backgroundColor = 'tomato';

// var cardBorderRadius = document.getElementsByClassName('card');
// console.log(cardBorderRadius);
// cardBorderRadius.style.borderRadius = '30px';

document
        .getElementById("submit-confirm")
        .addEventListener("keyup", function (event) {
          const submitBtn = document.getElementById("submit-btn");
          if (event.target.value == "email") {
            submitBtn.removeAttribute("disabled");
          } else {
            submitBtn.setAttribute("disabled", true);
          }
        });