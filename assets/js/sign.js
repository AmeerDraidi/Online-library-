// sign up 

$(".name").on("keyup", () => {
    let namePattern = /^[A-Z][a-z].{1,8}$/;


    if (namePattern.test($(".name").val())) {
        $(".btn").removeAttr("disabled");
        $(".name").addClass('is-valid')
        $(".name").removeClass('is-invalid')
        $(".nameAlert").addClass("d-none")
    }

    else if ($(".name").val() == "") {
        $(".name").attr("placeholder", "هذا حقل اجباري يجب ان تقوم بملئه")
        $(".name").removeClass('is-invalid')
        $(".nameAlert").addClass("d-none")
    }

    else {
        $(".btn").attr("disabled", "disabled")
        $(".name").addClass('is-invalid')
        $(".nameAlert").addClass("d-block")
        $(".nameAlert").removeClass('d-none')
    }

})


$(".pass").on("keyup", () => {
    let namePattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;



    if (namePattern.test($(".pass").val())) {
        $(".btn").removeAttr("disabled");
        $(".pass").addClass('is-valid')
        $(".pass").removeClass('is-invalid')
        $(".nameAlertPass").addClass("d-none")
    }

    else if ($(".pass").val() == "") {
        $(".pass").attr("placeholder", "هذا حقل  اجباري يجب ان تقوم بملئه")
        $(".pass").removeClass('is-invalid')
        $(".nameAlertPass").addClass("d-none")
    }

    else {
        $(".btn").attr("disabled", "disabled")
        $(".pass").addClass('is-invalid')
        $(".nameAlertPass").addClass("d-block")
        $(".nameAlertPass").removeClass('d-none')
    }

})





$(".btn").on("click",()=>{
    if ($(".name").val() == "Ameer Draidi" && $(".pass").val() == "123456") {
        $(".btn").attr("href","`./sign_up.html`")  
    }

    
})









