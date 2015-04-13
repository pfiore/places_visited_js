$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedState = $("input#new-state").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedNote = $("input#new-note").val();

    var newPlace = { name: inputtedName, state: inputtedState, country: inputtedCountry, date: inputtedDate, note: inputtedNote };

    $("ul#places").append("<li><span class='place'>") + newPlace.name + "</span></li>");

    $("input#new-name").val("");
    $("input#new-state").val("");
    $("input#new-country").val("");
    $("input#new-date").val("");
    $("input#new-note").val("");


  });
});
