$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedNote = $("input#new-note").val();

    var newPlace = { placeName: inputtedPlaceName, city: inputtedCity, state: inputtedState, country: inputtedCountry, date: inputtedDate, note: inputtedNote };

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-country").val("");
    $("input#new-date").val("");
    $("input#new-note").val("");

    $(".place").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".city").text(newPlace.city);
      $(".state").text(newPlace.state);
      $(".country").text(newPlace.country);
      $(".date").text(newPlace.date);
      $(".note").text(newPlace.note);
    });
  });
});
