$(document).ready(function () {
  //Displays the number of characters left for the counter
  $("#tweet-text").on("input", function () {
    const counter = document.getElementById("outputs");
    const textLn = this.value.length;
    const maxLength = 140;
    counter.innerHTML = Number(maxLength) - Number(textLn);
    if (counter.innerHTML < 0) {
      counter.style.color = "#FF0000";
    } else {
      counter.style.color = "grey";
    }
  });
});
