$(window).on("load", function(){
    //  Check off Specific Todos by Clicking

    $("ul").on("click", "li", function(){
       $(this).toggleClass("completed");
    });

    // Click on "trash" to delete Todo

    $("ul").on("click", "span", function(event){
        
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });

        event.stopPropagation();
    });

    $("input[type='text']").on("keypress", function(event){
        if(event.which === 13){
           let todoText = $(this).val();
            $(this).val("");
           $("ul").append(`<li><span><i class="far fa-trash-alt"></i></span> ${todoText} </li>`);
        }
    });

    $(".fa-plus").on("click", function(){
        $("input[type='text']").fadeToggle();
    });

})