$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();

    alert("oi");
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "sendemail.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,

        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}

function formSuccess(){
    alert ("oi2");
    $( "#msgSubmit" ).removeClass( "hidden" );
}