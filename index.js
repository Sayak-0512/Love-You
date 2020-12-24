setInterval(function() {
  document.querySelector(".h1FirstColor").textContent = "Love You!";
  document.querySelector(".h1FirstColor").classList.add("h1SecondColor");
  document.querySelector(".bodyColorFirstScreen").classList.add("bodyColorSecondScreen");
  setTimeout(function() {
    document.querySelector(".h1FirstColor").textContent = "Hello biatch!";
    document.querySelector(".h1FirstColor").classList.remove("h1SecondColor");
    document.querySelector(".bodyColorFirstScreen").classList.remove("bodyColorSecondScreen");
  }, 1000);
}, 2000);
