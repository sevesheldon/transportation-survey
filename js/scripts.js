$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();

    $("#work-responses").show();

    var userResponses = [];

    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");

      //turns the info into an array in var userResponses (and logged in the console).
      userResponses.push(workTransportationMode);
      console.log(userResponses);
    });

    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTransportationMode = $(this).val();
      $("#fun-responses").append(funTransportationMode + "<br>");

      //to all upper case (and logged in the console).
      var capitalFunTransportationMode = funTransportationMode.toUpperCase();
      console.log(capitalFunTransportationMode);
    });

    $("#transportation_survey").hide();
  });


});
