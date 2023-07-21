$(document).ready(function() {
  
  
  $("#tweet-text").on('input', function(){
    const counter = document.getElementById("outputs");
    const textLn =  this.value.length;
    // Get the `maxlength` attribute of the textArea
    const maxLength = 140;
    // Count the current number of characters left
    counter.innerHTML = Number(maxLength) - Number(textLn);
    if (counter.innerHTML < 0)
    {
      counter.style.color = "#FF0000";
    } else {
      counter.style.color = "grey"
    }
  });
});