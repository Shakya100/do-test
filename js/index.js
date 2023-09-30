jQuery('#firstform').validate({
    rules:{
        fname:"required",
        email:"required",
        number:{
             required:true,
             minlength:10
        },
        textarea:{
            required:true,
            minlength:500
       },
    }, messages:{
        fname:"Please Enter Your Name",
        email:"Please Enter Valid Id",
        number:"Please Enter Correct Number",
        textarea:"Please Enter Your Requirement in 500 words",
    }
});