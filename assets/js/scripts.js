//toggle strike through and dim items on click
$("ul").on("click", "li", function() {
    $(this).toggleClass("complete");
});

//handle deleting items
$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    //affect parent element, otherwise it would only affect the span
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

//handle creating items via input
$("input[type='text']").keypress(function(event) {
    //charcode 13 = return
    if (event.which === 13) {
        //get input value
        let inputVal = $(this).val();
        //clear input
        $(this).val("");
        //create new li
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + inputVal + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});
