(function (){
    var inputfirstName= document.getElementById("firstname")
    var inputlastName= document.getElementById("lastname")
    var inputaddressEmail= document.getElementById("email")
    var inputpassword= document.getElementById("password")
    var textErrorFirstName= document.getElementById("texterrorfirstname")
    var textErrorLastName= document.getElementById("texterrorlastname")
    var textErrorEmail= document.getElementById("texterroremail")
    var textErrorPassword= document.getElementById("texterrorpassword")
    var buttonClaim= document.getElementById("buttonclaim")

    buttonClaim.addEventListener("click", function (){
        var email= inputaddressEmail.value
        var match= email.match(/[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z]/)

        if (!inputfirstName.value) {
            inputfirstName.classList.remove("noverified")
            inputfirstName.classList.add("error")
            inputfirstName.classList.add("empty")
            textErrorFirstName.classList.remove("hidden")
        }
        else {
            textErrorFirstName.classList.remove("error")
        }

        if (!inputlastName.value) {
            inputlastName.classList.remove("noverified")
            inputlastName.classList.add("error")
            inputlastName.classList.add("empty")
            textErrorLastName.classList.remove("hidden")
        }
        else {
            textErrorLastName.classList.add("hidden")
        }

        if(!match) {
            inputaddressEmail.classList.remove("noverified")
            inputaddressEmail.classList.add("error")
            inputaddressEmail.classList.add("bademail")
            textErrorEmail.classList.remove("hidden")
        }
        else {
            textErrorEmail.classList.remove("error")
        }

        if (!inputpassword.value) {
            inputpassword.classList.remove("noverified")
            inputpassword.classList.add("error")
            inputpassword.classList.add("empty")
            textErrorPassword.classList.remove("hidden")
        }
        else {
            textErrorPassword.classList.add("hidden")
        }

        if (inputfirstName.value, inputlastName.value, inputaddressEmail.match, inputpassword.value) {
            inputfirstName.value=""
            inputlastName.value=""
            inputaddressEmail.value=""
            inputpassword.value=""
        }

    })

    inputfirstName.addEventListener("click", function (){
        inputfirstName.classList.remove ("error")
        inputfirstName.classList.remove ("empty")
        inputfirstName.classList.add ("noverified")
        textErrorFirstName.classList.add ("hidden")
    })

    inputlastName.addEventListener("click", function (){
        inputlastName.classList.remove ("error")
        inputlastName.classList.remove ("empty")
        inputlastName.classList.add ("noverified")
        textErrorLastName.classList.add ("hidden")
    })

    inputaddressEmail.addEventListener("click", function (){
        inputaddressEmail.classList.remove ("error")
        inputaddressEmail.classList.remove ("bademail")
        inputaddressEmail.classList.add ("noverified")
        textErrorEmail.classList.add ("hidden")
    })

    inputpassword.addEventListener("click", function (){
        inputpassword.classList.remove ("error")
        inputpassword.classList.remove ("empty")
        inputpassword.classList.add ("noverified")
        textErrorPassword.classList.add ("hidden")
    })



})()