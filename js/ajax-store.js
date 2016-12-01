/**
 * Created by Irby on 12/1/16.
 */
(function() {
    "use strict";
    // TODO: Create an ajax GET request for /data/inventory.json

    // Assign to variable
    var inventory = $.get("data/inventory.json");


    // TODO: Take the data from inventory.json and append it to the products table
    function populate (inventory) {
        inventory.done(function(data) {
            var rows;
            data.forEach(function(element) {
                rows += "<tr>"
                            + "<td>" + element.title + "</td>"
                            + "<td>" + element.quantity + "</td>"
                            + "<td>" + element.price + "</td>"
                            + "<td>" + element.categories.join(', ') + "</td>"
                    + "</tr>"
            });
            $("#insertProducts").html(rows);
        });
    }

    populate(inventory);
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    console.log(inventory);
    $("#btnRefresh").click(function() {
        inventory = $.get("data/inventory.json");

        populate(inventory);
    });

    //       HINT: You will want to target #insertProducts for your new HTML elements
})();