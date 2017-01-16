var blanksArray = ["item1", "item2", "item3", "item4"];

var inputArray = []

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $("#blanks").hide();
    $("#results").show();
    event.preventDefault();
    blanksArray.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      inputArray.push(userInput);
    });
    inputArray.sort();
    inputArray.forEach(function(item) {
      $("#resultsHere").append("<li>" + item + "</li>");
    });
  });
});
