$(function() {
$(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("neweat");

    var newEatState = {
        id: id,
        devoured: 1
    }


    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newEatState
    }).then(
        function() {
        console.log("changed eaten to", newDevoured);
     
        location.reload();
        }
    );
  });

$(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#bt").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  
});