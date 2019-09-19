$(document).ready(function() {
    $(".devoured").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("newEat");
        var devouredBurger = {
            devoured: devoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function() {
            console.log("changed state to ", devoured);
            location.reload();
        });
    });

    $(".add-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Burger Added");
            location.reload();
        })
    })
});