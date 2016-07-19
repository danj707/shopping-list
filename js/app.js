$(document).ready(function () {

    //add button clicker
    $("#js-shopping-list-form").submit(function (event) {
        event.preventDefault(); // dont submit to server
        var shoppingInput = $("input#shopping-list-entry").val();

        //trim whitespace
        $.trim(shoppingInput);

        //check for undefined and alert, color input field
        if (!shoppingInput) {
            alert("Sorry, you must choose beer!");
            $('#js-shopping-list-form').addClass("error");
        } else {
            //otherwise, add the <li>
            $('.shopping-list').append('<li><span class="shopping-item">' +
                shoppingInput + '</span><div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span></button><button class="shopping-item-delete">' + '<span class="button-label">delete</span></button></div></li>');
            $('#js-shopping-list-form').removeClass("error");
        }
    });

    //check cross off button clicker thingie
    $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
        event.preventDefault();
        $(this).closest('li').find(".shopping-item").toggleClass("shopping-item__checked");
    });

    //delete button clicker
    $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
        event.preventDefault();
        $(this).closest('li').remove();
    });

});
