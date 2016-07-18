//add button clicker
$("#js-shopping-list-form").submit(function (event) {
    var shoppingInput = $("input#shopping-list-entry").val();
    alert('Handler for .submit() add item called: ' + shoppingInput);
    $('.shopping-list').append('<li><span class="shopping-item">' +
        shoppingInput + '</span><div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label">check</span></button><button class="shopping-item-delete">' + '<span class="button-label">delete</span></button></div></li>');
    //event.preventDefault();
});

//check button clicker
$('.shopping-item-toggle').click(function (event) {
    alert("handler for .click() toggle called.");
    var content = $("span.shopping-item__checked").html();
    //console.log(content);
    $('.shopping-item-toggle').css('<span class="shopping-item shopping-item__checked">' + content + '</span');
    event.preventDefault();
});

//delete button clicker
$('.shopping-item-delete').click(function (event) {
    alert("handler for .click() delete called.");
    $('.shopping-item-delete').parent().parent('li').hide();
    event.preventDefault();
});
