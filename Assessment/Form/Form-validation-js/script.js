
$("form").validate();
$('#submit').click(function () {

    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var date = $("#date").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var pin = $("#pin").val();
    var state = $("#state").val();
    var password = $("#password").val();




    if (fname == "") {
        alert("please enter first name");
    }

    if (lname == "") {
        alert("please enter last name");
    }
    if (email == "") {
        alert("please enter email id");
    }
    if (phone == "") {
        alert("please enter phone number");
    }
    if (date == "") {
        alert("please enter your birth dtae ");
    }
    if (address == "") {
        alert("please enter address ");
    }
    if (city == "") {
        alert("please enter city");
    }
    if (pin == "") {
        alert("please enter pin");
    }
    if (state == "") {
        alert("please enter state");
    }
    if (password == "") {
        alert("please enter password ");
    }
    else {
        alert("registration sucsessfully....")
    }
});
